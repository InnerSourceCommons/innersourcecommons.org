var youmax_global_options = {};


(function ($) {
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

    getChannelId = function(apiUrl) {

        $.ajax({
            url: apiUrl,
            type: "GET",
            async: true,
            cache: true,
            dataType: 'jsonp',
            success: function(response) {
                youmaxChannelId = response.items[0].id
                getChannelDetails(youmaxChannelId);
            },
            error: function(html) { alert(html); },
            beforeSend: setHeader
        });
    },

    getChannelDetails = function(channelId) {
        var apiProfileURL = "https://www.googleapis.com/youtube/v3/channels?part=brandingSettings%2Csnippet%2Cstatistics%2CcontentDetails&id="+channelId+"&key="+youmax_global_options.apiKey;

        $.ajax({
            url: apiProfileURL,
            type: "GET",
            async: true,
            cache: true,
            dataType: 'jsonp',
            success: function(response) { showInfo(response);},
            error: function(html) { alert(html); },
            beforeSend: setHeader
        });
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

    showUploads = function(response,playlistTitle,loadMoreFlag) {

        if(!loadMoreFlag) {
            $('#youmax-video-list-div').empty();

            if(playlistTitle) {
                $('.youmax-tab-hover').removeClass('youmax-tab-hover');
                $('#youmax-video-list-div').append('<span class="youmax-showing-title youmax-tab-hover" id="uploads_'+response.items[0].snippet.playlistId+'" style="max-width:100%;"><span class="youmax-showing">&nbsp;&nbsp;Showing playlist: </span>'+playlistTitle+'</span><br/>');
            }
        }

        var nextPageToken = response.nextPageToken;
        var $youmaxLoadMoreDiv = $('#youmax-load-more-div');
        youmaxColumns = youmax_global_options.youmaxColumns;

        if(null!=nextPageToken && nextPageToken!="undefined" && nextPageToken!="") {
            $youmaxLoadMoreDiv.data('nextpagetoken',nextPageToken);
        } else {
            $youmaxLoadMoreDiv.data('nextpagetoken','');
        }

        var uploadsArray = response.items;
        var videoIdArray = [];

        for(var i=0; i<uploadsArray.length; i++) {
            videoId = uploadsArray[i].snippet.resourceId.videoId;
            videoTitle = uploadsArray[i].snippet.title;
            videoUploaded = uploadsArray[i].snippet.publishedAt;
            videoThumbnail = uploadsArray[i].snippet.thumbnails.medium.url;
            videoIdArray.push(videoId);

            $('#youmax-video-list-div').append('<div class="col-md-4 col-sm-6"><div class="youmax-video-tnail-box" id="'+videoId+'"><div class="youmax-video-tnail" style="filter: progid:DXImageTransform.Microsoft.AlphaImageLoader( src=\''+videoThumbnail+'\', sizingMethod=\'scale\'); background-image:url(\''+videoThumbnail+'\')"><div class="youmax-duration"></div></div><span class="youmax-video-list-title">'+videoTitle+'</span><br/></div></div>');
            
        }
        youmax_global_options.youmaxItemCount+=uploadsArray.length;
    },

    getUploads = function(youmaxTabId,playlistTitle,nextPageToken) {
        var pageTokenUrl = "";
        var loadMoreFlag = false;

        if(null!=nextPageToken) {
            pageTokenUrl = "&pageToken="+nextPageToken;
            loadMoreFlag = true;
        }

        var uploadsPlaylistId = youmaxTabId.substring(youmaxTabId.indexOf('_')+1);
        var apiUploadURL = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId="+uploadsPlaylistId+"&maxResults="+youmax_global_options.maxResults+pageTokenUrl+"&key="+youmax_global_options.apiKey;

        $.ajax({
            url: apiUploadURL,
            type: "GET",
            async: true,
            cache: true,
            dataType: 'jsonp',
            success: function(response) { showUploads(response,playlistTitle,loadMoreFlag);},
            error: function(html) { alert(html); },
            beforeSend: setHeader
        });
    },

    prepareYoumax = function() {
        $('#youmax').empty();
        loadYoumax();
        showLoader();

        $('.youmax-tab').click(function(){
            $('.youmax-tab-hover').removeClass('youmax-tab-hover');
            $(this).addClass('youmax-tab-hover');
            youmaxTabId = this.id;
            showLoader();
            getUploads(youmaxTabId);
        });

        youTubeChannelURL = youmax_global_options.youTubeChannelURL;
        console.log(youTubeChannelURL);
        

        if(youTubeChannelURL!=null) {
            s=youTubeChannelURL.indexOf("/user/");
            if(s!=-1) {
                userId = youTubeChannelURL.substring(s+6);
                apiUrl = "https://www.googleapis.com/youtube/v3/channels?part=id&forUsername="+userId+"&key="+youmax_global_options.apiKey;
                getChannelId(apiUrl);
            } else {
                s=youTubeChannelURL.indexOf("/channel/");
                if(s!=-1) {
                    youmaxChannelId = youTubeChannelURL.substring(s+9);
                    youmax_global_options.youmaxChannelId = youmaxChannelId;
                    getChannelDetails(youmaxChannelId);
                } else {
                    alert("Could Not Find Channel..");
                }
            }
        }

    }


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
