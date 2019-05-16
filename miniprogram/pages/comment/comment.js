// pages/comment/comment.js

const db = wx.cloud.database(); // 初始化数据库
Page({

    /**
     * 页面的初始数据
     */
    data: {
        detail: {}, // 电影详情
        content: '', // 评价内容
        score: 5, // 评价分数
        images: [], // 上传的图片
        fileIDs: [], // 云存储返回的文件id
        movieid: -1, // 当前电影id
        comments: [], // 评论数据
        date: "", // 评论时间
        userInfo: {} // 用户信息
    },

    /***
     * 评价
     * **/
    onContentChange: function(event) {
        this.setData({
            content: event.detail
        })
    },
    /***
     * 分数
     * **/
    onScoreChange: function(event) {
        this.setData({
            score: event.detail
        })
    },
    /***
     * 上传图片
     * **/
    uploadImg: function() {
        // 选择图片
        wx.chooseImage({
            count: 9,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: res => {
                // tempFilePath可以作为img标签的src属性显示图片
                const tempFilePaths = res.tempFilePaths;
                console.log(tempFilePaths);
                this.setData({
                    images: this.data.images.concat(tempFilePaths)
                })
            }
        })
    },
    onGotUserInfo(e) {
        if (e.detail.errMsg === "getUserInfo:ok") {
            let userInfo = e.detail.userInfo;
            this.setData({
                userInfo: userInfo
            })
            this.submit();
        }else {
            this.submit();
        }
    },
    /***
     * 提交评价
     * **/
    submit: function() {
        console.log(this.data.content, this.data.score)

        var da = new Date().getTime();
        da = new Date(da);
        var year = da.getFullYear() + '年';
        var month = da.getMonth() + 1 + '月';
        var date = da.getDate() + '日';
        const currentDate = [year, month, date].join("");
        this.setData({
            date: currentDate
        })
        wx.showLoading({
            title: '评论中',
        })
        // 上传图片到云存储，云存储返回fileid后再把fileid存到数据库
        let promiseArr = []
        for (let i = 0; i < this.data.images.length; i++) {
            let item = this.data.images[i];
            let suffix = /\.\w+$/.exec(item)[0]; // 正则表达式，返回文件扩展名
            promiseArr.push(new Promise((resolve, reject) => {
                wx.cloud.uploadFile({
                    cloudPath: new Date().getTime() + suffix, // 上传至云端的路径,时间戳 + 扩展名的方式保证文件名唯一
                    filePath: item, // 小程序临时文件路径
                    success: res => {
                        // 返回文件 ID
                        console.log(res.fileID)
                        this.setData({
                            fileIDs: this.data.fileIDs.concat(res.fileID)
                        })

                        resolve();
                    },
                    fail: console.error
                })
            }));
        }

        Promise.all(promiseArr).then(res => {
            // 插入数据到数据库
            db.collection("comment").add({
                data: {
                    content: this.data.content,
                    score: this.data.score,
                    movieid: this.data.movieid,
                    fileIDs: this.data.fileIDs,
                    date: this.data.date,
                    userInfo: this.data.userInfo
                }
            }).then(res => {
                wx.hideLoading();
                wx.showToast({
                    title: '评价成功',
                })
                this.getComment(this.data.movieid);
            }).catch(err => {
                wx.hideLoading();
                wx.showToast({
                    title: '评价失败',
                })
            })
        })
    },
    /***
     * 获取电影详情
     * **/
    getDetail: function (movieid) {
        wx.cloud.callFunction({
            name: 'getDetail',
            data: {
                movieid: movieid
            }
        }).then(res => {
            console.log(res)
            this.setData({
                detail: JSON.parse(res.result)
            })
        }).catch(err => {
            console.error(err)
        })
    },
    /***
     * 获取评论
     * **/
    getComment: function (movieid) {
        wx.cloud.callFunction({
            name: 'getComment',
            data: {
                movieid: movieid
            }
        }).then(res => {
            console.log("getComment: ", res)
            this.setData({
                comments: res.result.data
            })
        }).catch(err => {
            console.error(err)
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log(options)
        this.setData({
            movieid: options.movieid
        })
        this.getDetail(this.data.movieid);
        this.getComment(this.data.movieid);
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})