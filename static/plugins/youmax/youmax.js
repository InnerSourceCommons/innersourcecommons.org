var youmax_global_options = {};


(function ($) {
    prepareYoumax = function() {
        $('#youmax').empty();
        loadYoumax();
        showLoader();
        getUploads();
    }

    loadYoumax = function() {
        ym = $('#youmax');
        youmaxWidgetWidth = ym.width();

        ym.append('<div id="youmax-header"><div id="youmax-stat-holder"></div></div>');


        ym.append('<div id="youmax-tabs"><!--<span id="featured_" class="youmax-tab">Featured</span>--><span id="uploads_" class="youmax-tab d-none"></span><!--<span id="playlists_" class="youmax-tab">Playlists</span></div>-->');


        ym.append('<div id="youmax-encloser"><iframe id="youmax-video" width="'+(youmaxWidgetWidth-2)+'" height="'+(youmaxWidgetWidth/youmax_global_options.youtubeVideoAspectRatio)+'" src="" frameborder="0" allowfullscreen></iframe><div id="youmax-video-list-div" class="row"></div></div>');

        $('#youmax-video').hide();

        ym.append('<div id="youmax-lightbox"><div style="width:100%; position:absolute; top:20%;"><iframe id="youmax-video-lightbox" width="640" height="360" src="" frameborder="0" allowfullscreen></iframe></div></div>');

        $('#youmax-lightbox').hide();
    },

    setHeader = function(xhr) {
        if(xhr && xhr.overrideMimeType) {
            xhr.overrideMimeType("application/j-son;charset=UTF-8");
        }
    },

    showLoader = function() {
        youmax_global_options.youmaxItemCount = 0;
        $('#youmax-video-list-div').empty();
        $('#youmax-video').hide();
        $('#youmax-video').attr('src','');
        $('#youmax-video-list-div').append('<div style="height:200px; font:14px;"><br><br><br><br><br><br>Loading...</div>');
    },

    showInfo = function(response) {
        if (!response.items) {
            return;
        }
        
        var channelData = response.items[0];
        var channelId = channelData.id;
        var channelName = channelData.snippet.title;
        var channelPic = channelData.snippet.thumbnails.default.url;
        var channelUploadsPlaylistId = channelData.contentDetails.relatedPlaylists.uploads;

        $('#youmax-header').append('<a href="' + youTubeChannelURL + '" target="_blank"><img id="youmax-header-logo" src="'+channelPic+'"/>'+channelName+'</a>');

        $('#youmax-header').append('<div class="youmax-subscribe"><div class="g-ytsubscribe" data-channelid="'+channelId+'" data-layout="default" data-count="default"></div></div>');

        $('#youmax-tabs').find('span[id^=uploads_]').attr('id','uploads_'+channelUploadsPlaylistId);

        youmaxDefaultTab = youmax_global_options.youmaxDefaultTab;

        if(typeof youmaxDefaultTab === 'undefined'||null==youmaxDefaultTab||youmaxDefaultTab==""||youmaxDefaultTab=="undefined") {
            $("#youmax-tabs span[id^=featured_]").click();
        } else if(youmaxDefaultTab.toUpperCase()=='UPLOADS'||youmaxDefaultTab.toUpperCase()=='UPLOAD') {
            $("#youmax-tabs span[id^=uploads_]").click();
        } else if(youmaxDefaultTab.toUpperCase()=='PLAYLISTS'||youmaxDefaultTab.toUpperCase()=='PLAYLIST') {
            $("#youmax-tabs span[id^=playlists_]").click();
        } else if(youmaxDefaultTab.toUpperCase()=='FEATURED'||youmaxDefaultTab.toUpperCase()=='FEATURED') {
            $("#youmax-tabs span[id^=featured_]").click();
        }


    },

    showUploads = function() {
        $('#youmax-video-list-div').empty();
        let response = JSON.parse(sessionStorage.getItem("youtubeResponse"));
        var nextPageToken = response.nextPageToken;
        var $youmaxLoadMoreDiv = $('#youmax-load-more-div');
        youmaxColumns = youmax_global_options.youmaxColumns;

        if(null!=nextPageToken && nextPageToken!="undefined" && nextPageToken!="") {
            $youmaxLoadMoreDiv.data('nextpagetoken',nextPageToken);
        } else {
            $youmaxLoadMoreDiv.data('nextpagetoken','');
        }

        var uploadsArray = response.items;

        for(var i=0; i<uploadsArray.length; i++) {
            videoId = uploadsArray[i].id.videoId;
            videoTitle = uploadsArray[i].snippet.title;
            videoUploaded = uploadsArray[i].snippet.publishedAt;
            videoThumbnail = uploadsArray[i].snippet.thumbnails.medium.url;
            
            $('#youmax-video-list-div').append('<div class="col-md-4 col-sm-6"><a target="_blank" href="https://www.youtube.com/watch?v='+ videoId +'><div class="youmax-video-tnail-box" id="'+videoId+'"><div class="youmax-video-tnail" style="filter: progid:DXImageTransform.Microsoft.AlphaImageLoader( src=\''+videoThumbnail+'\', sizingMethod=\'scale\'); background-image:url(\''+videoThumbnail+'\')"><div class="youmax-duration"></div></div><span class="youmax-video-list-title">'+videoTitle+'</span><br/></div></a></div>');
            
        }
        youmax_global_options.youmaxItemCount+=uploadsArray.length;
    },

    getUploads = function() {
        let response = JSON.parse(sessionStorage.getItem("youtubeResponse"));
        if (!(location.hostname === "localhost" || location.hostname === "127.0.0.1")){
            if(!response){
                let channelId = youmax_global_options.youTubeChannelURL.split('/').pop();
                var apiUploadURL = "https://www.googleapis.com/youtube/v3/search?key=" + youmax_global_options.apiKey + "&channelId="+ channelId +"&part=snippet,id&order=date&maxResults=" + youmax_global_options.maxResults;
        
                $.ajax({
                    url: apiUploadURL,
                    type: "GET",
                    async: true,
                    cache: true,
                    dataType: 'jsonp',
                    success: function(response) {
                        sessionStorage.setItem("youtubeResponse", JSON.stringify(response));
                        showUploads(response);
                    },
                    error: function(html) { alert(html); },
                    beforeSend: setHeader
                });
            } else {
                showUploads();
            }
        }
    },

    $.fn.youmax = function(options) {
        //set local options
        youmax_global_options.apiKey = options.apiKey;
        youmax_global_options.youTubeChannelURL = options.youTubeChannelURL||'';
        youmax_global_options.youTubePlaylistURL = options.youTubePlaylistURL||'';
        youmax_global_options.youmaxDefaultTab = options.youmaxDefaultTab||'FEATURED';
        youmax_global_options.youmaxColumns = options.youmaxColumns||3;
        youmax_global_options.showVideoInLightbox = options.showVideoInLightbox||false;
        youmax_global_options.youmaxChannelId = '';
        youmax_global_options.maxResults = options.maxResults||15;
        youmax_global_options.youmaxItemCount = 0;
        youmax_global_options.youtubeVideoAspectRatio = 640/360;
        youmax_global_options.youtubeMqdefaultAspectRatio = 300/180;
        prepareYoumax();
    };
}( jQuery ));
