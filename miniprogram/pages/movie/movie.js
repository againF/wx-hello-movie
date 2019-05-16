// pages/movie/movie.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        movieList: [] // 电影数据
    },

    /**
     * 获取电影数据
     */
    getMovieList: function() {
        wx.showLoading({
            title: '加载中',
        })
        wx.cloud.callFunction({
            name: 'movieList',
            start: this.data.movieList.length,
            count: 10
        }).then(res => {
            console.log(res);
            this.setData({
                movieList: this.data.movieList.concat(JSON.parse(res.result).subjects)
            });
            wx.hideLoading();
        }).catch(err => {
            console.error(err);
            wx.hideLoading();
        })
    },

    /***
     * 打开评价页
     * **/
    gotoComment: function(event) {
        wx.navigateTo({
            url: `../comment/comment?movieid=${ event.target.dataset.movieid}`
        })
       
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // load时请求电影列表接口
        this.getMovieList();
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
        this.getMovieList();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})