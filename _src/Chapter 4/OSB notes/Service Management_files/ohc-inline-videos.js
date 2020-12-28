(function() {
  var Jjb;

  Jjb = (function() {
    function Jjb(options) {
      if (this.apexBaseUrl == null) {
        this.apexBaseUrl = "https://apex.oracle.com/pls/apex/oll_rest/oll/docs/content/";
      }
      if (this.youtubeBaseUrl == null) {
        this.youtubeBaseUrl = "//gdata.youtube.com/feeds/api/videos/";
      }
      this.defaultParams = {
        'v': '2',
        'alt': 'jsonc',
        'orderby': 'published'
      };
      this.map = {};
      this.fancyBox = false;
      if (this.width == null) {
        this.width = 420;
      }
      if (this.height == null) {
        this.height = 315;
      }
    }

    Jjb.getDefaultParams = function() {
      return {
        'v': '2',
        'alt': 'jsonc',
        'orderby': 'published'
      };
    };

    Jjb.prototype.setOptions = function(options) {
      this.apexBaseUrl = options.apexBaseUrl ? options.apexBaseUrl : this.apexBaseUrl;
      this.fancyBox = options.fancyBox ? options.fancyBox : this.fancyBox;
      this.width = options.width ? options.width : this.width;
      return this.height = options.height ? options.width : this.height;
    };

    Jjb.prototype.getParamsString = function(params) {
      var k, result, v;
      if (params == null) {
        params = {};
      }
      params = $.extend(params, this.defaultParams);
      result = "?";
      for (k in params) {
        v = params[k];
        result += "&" + k + "=" + v;
      }
      return result;
    };

    Jjb.prototype.getVideoFromApex = function(id, callback) {
      return $.getJSON(this.apexBaseUrl + id, callback);
    };

    Jjb.prototype.getVideoFromYoutube = function(id, callback) {
      return $.getJSON(this.youtubeBaseUrl + id + this.getParamsString(null), callback);
    };

    Jjb.prototype.fetchVideos = function() {
      var video, videos, _i, _len, _results;
      videos = $(".video-container");
      _results = [];
      for (_i = 0, _len = videos.length; _i < _len; _i++) {
        video = videos[_i];
        console.log(video.id);
        _results.push(this.getVideoFromApex(video.id, this.parseApexResponse));
      }
      return _results;
    };

    Jjb.prototype.parseApexResponse = function(data) {
      var youtubeId;
      youtubeId = window.jjb.parseYoutubeLink(data.link);
      $("#" + data.content_id).addClass("video-container-" + youtubeId);
      return window.jjb.getVideoFromYoutube(youtubeId, window.jjb.parseYoutubeResponse);
    };

    Jjb.prototype.parseYoutubeResponse = function(data) {
      var video, videoId;
      videoId = data.data.id;
      video = window.jjb.createVideoStructure(videoId);
      return $(".video-container-" + videoId).append(video);
    };

    Jjb.prototype.parseYoutubeLink = function(data) {
      var link;
      link = data.split("/");
      return link[link.length - 1];
    };

    Jjb.prototype.createVideoStructure = function(id) {
      var string;
      if (window.jjb.fancyBox) {
        return string = '<a class="various iframe" href="http://www.youtube.com/embed/' + id + '?autoplay=1" data-fancybox-type="iframe"> <img alt="" src="http://i.ytimg.com/vi/' + id + '/hqdefault.jpg"> </a>';
      } else {
        return string = '<iframe style="position: relative; height: 100%; width: 100%" src="http://www.youtube.com/embed/' + id + '"> </iframe>';
      }
    };

    return Jjb;

  })();

  window.jjb = new Jjb;

}).call(this);
