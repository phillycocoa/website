

// Before uploading: Replace the escaped less than symbol with a less than symbol
// FIXME: This sucks ^^
var Template = function() { return `<xml version="1.0" encoding="UTF-8" ?>
  <document>


  <head>
    <style>
      .descriptionText {
        margin: 20;
        color: #444440;
        font-size: 36;
        max-height: 500;
        tv-text-max-lines: 12;
      }
    </style>
  </head>

    <catalogTemplate>
      <banner>
        <title>Philly CocoaHeads</title>
      </banner>
      <list>
        <section>
	  <listItemLockup>
	    <title>Recent Videos</title>
	    <decorationLabel>21</decorationLabel>
	    <relatedContent>
	      <grid>
	        <section>

            <lockup videoURL="http://player.vimeo.com/external/198749917.hd.mp4?s=9545bb64d4020309bca5e4c475682832c0b3e9bb&amp;profile_id=119&amp;oauth2_token_id=384186094">
              <img src="https://i.vimeocdn.com/video/611839125_640x360.jpg?r=pad" width="500" height="282" />
            </lockup>

            <lockup videoURL="http://player.vimeo.com/external/198715448.hd.mp4?s=3017c0f102311050645028f27f1a50dbd32046b6&amp;profile_id=119&amp;oauth2_token_id=384186094">
              <img src="https://i.vimeocdn.com/video/611802424_640x360.jpg?r=pad" width="500" height="282" />
            </lockup>

            <lockup videoURL="http://player.vimeo.com/external/198708288.hd.mp4?s=4147be65f5b3c488139af111f9e292f6032cb0e0&amp;profile_id=119&amp;oauth2_token_id=384186094">
              <img src="https://i.vimeocdn.com/video/611758895_640x360.jpg?r=pad" width="500" height="282" />
            </lockup>

            <lockup videoURL="http://player.vimeo.com/external/178498236.hd.mp4?s=8a2ea20342a828fabc385b22b25a14c218a148e4&amp;profile_id=119&amp;oauth2_token_id=384186094">
              <img src="https://i.vimeocdn.com/video/586150868_640x360.jpg?r=pad" width="500" height="282" />
            </lockup>

            <lockup videoURL="http://player.vimeo.com/external/178489935.hd.mp4?s=9edb3e9ebae49edca93951e6f39f7c630465f298&amp;profile_id=119&amp;oauth2_token_id=384186094">
              <img src="https://i.vimeocdn.com/video/586150097_640x360.jpg?r=pad" width="500" height="282" />
            </lockup>

            <lockup videoURL="http://player.vimeo.com/external/167289419.hd.mp4?s=4518e3a318793b4323b597bb1d09e79321977f01&amp;profile_id=119&amp;oauth2_token_id=384186094">
              <img src="https://i.vimeocdn.com/video/571564110_640x360.jpg?r=pad" width="500" height="282" />
            </lockup>

            <lockup videoURL="http://player.vimeo.com/external/164833813.hd.mp4?s=3124d23cdb64cfd1e4e6946c9cd441f4cff80cf5&amp;profile_id=119&amp;oauth2_token_id=384186094">
              <img src="https://i.vimeocdn.com/video/568546131_640x360.jpg?r=pad" width="500" height="282" />
            </lockup>

            <lockup videoURL="http://player.vimeo.com/external/152112429.hd.mp4?s=fe955787df2bb4f8bd14d1b1b264254e1a2a3219&amp;profile_id=119&amp;oauth2_token_id=384186094">
              <img src="https://i.vimeocdn.com/video/552027908_640x360.jpg?r=pad" width="500" height="282" />
            </lockup>

            <lockup videoURL="http://player.vimeo.com/external/149458300.hd.mp4?s=e6efb2a550d5e245f5067294c684413374ed15f3&amp;profile_id=119&amp;oauth2_token_id=384186094">
              <img src="https://i.vimeocdn.com/video/548697397_640x360.jpg?r=pad" width="500" height="282" />
            </lockup>

            <lockup videoURL="http://player.vimeo.com/external/145747218.hd.mp4?s=744c0d718ab6e3aa5359019e887261e09cae2138&amp;profile_id=119&amp;oauth2_token_id=384186094">
              <img src="https://i.vimeocdn.com/video/543996755_640x360.jpg?r=pad" width="500" height="282" />
            </lockup>

            <lockup videoURL="http://player.vimeo.com/external/140379332.hd.mp4?s=9722c1c6fada2684e86a48f4a0efdcc7389c19f9&amp;profile_id=119&amp;oauth2_token_id=384186094">
              <img src="https://i.vimeocdn.com/video/536793873_640x360.jpg?r=pad" width="500" height="282" />
            </lockup>

            <lockup videoURL="http://player.vimeo.com/external/140377195.hd.mp4?s=f40f01a46df2e083b8f7e0f364a33f373b7e1ced&amp;profile_id=119&amp;oauth2_token_id=384186094">
              <img src="https://i.vimeocdn.com/video/536793969_640x360.jpg?r=pad" width="500" height="282" />
            </lockup>

            <lockup videoURL="http://player.vimeo.com/external/137694857.sd.mp4?s=a9ef969c3bcc06825c404432f0d67e18d6f1991b&amp;profile_id=112&amp;oauth2_token_id=384186094">
              <img src="https://i.vimeocdn.com/video/542448807_100x75.jpg?r=pad" width="500" height="282" />
            </lockup>

            <lockup videoURL="http://player.vimeo.com/external/137693009.hd.mp4?s=08039d6e6f2e0f070005c465431707d411f4dffb&amp;profile_id=119&amp;oauth2_token_id=384186094">
              <img src="https://i.vimeocdn.com/video/532718226_640x360.jpg?r=pad" width="500" height="282" />
            </lockup>

            <lockup videoURL="http://player.vimeo.com/external/128605939.hd.mp4?s=9d904148569096bc3f6baa0d70e0c01c69706bdd&amp;profile_id=119&amp;oauth2_token_id=384186094">
              <img src="https://i.vimeocdn.com/video/519812133_640x360.jpg?r=pad" width="500" height="282" />
            </lockup>

            <lockup videoURL="http://player.vimeo.com/external/124773837.hd.mp4?s=f2e0505f8e09ee50d1494f69fcfb729f9f974772&amp;profile_id=119&amp;oauth2_token_id=384186094">
              <img src="https://i.vimeocdn.com/video/514628591_640x360.jpg?r=pad" width="500" height="282" />
            </lockup>

            <lockup videoURL="http://player.vimeo.com/external/124773343.hd.mp4?s=88e201bcbc798e06986abc1689dc636ba1d302d9&amp;profile_id=119&amp;oauth2_token_id=384186094">
              <img src="https://i.vimeocdn.com/video/514628525_640x360.jpg?r=pad" width="500" height="282" />
            </lockup>

            <lockup videoURL="http://player.vimeo.com/external/122706243.hd.mp4?s=e41dcd4ac7777ef5c06fbbf4f6bdbb420fe53e40&amp;profile_id=119&amp;oauth2_token_id=384186094">
              <img src="https://i.vimeocdn.com/video/511867104_640x360.jpg?r=pad" width="500" height="282" />
            </lockup>

            <lockup videoURL="http://player.vimeo.com/external/119634719.sd.mp4?s=dcf6984cd97335d6d7f8c439b534cbbb54d00b92&amp;profile_id=112&amp;oauth2_token_id=384186094">
              <img src="https://i.vimeocdn.com/video/507137406_640x360.jpg?r=pad" width="500" height="282" />
            </lockup>

            <lockup videoURL="http://player.vimeo.com/external/119606531.hd.mp4?s=1c6c4d265da092ed652af7c0cf54b65cc9bec46f&amp;profile_id=113&amp;oauth2_token_id=384186094">
              <img src="https://i.vimeocdn.com/video/507067373_640x360.jpg?r=pad" width="500" height="282" />
            </lockup>

            <lockup videoURL="http://player.vimeo.com/external/119604467.hd.mp4?s=4ad9f1c3f2440b5812f62e76bc80e72f84e0a67e&amp;profile_id=113&amp;oauth2_token_id=384186094">
              <img src="https://i.vimeocdn.com/video/507064603_640x360.jpg?r=pad" width="500" height="282" />
            </lockup>

		      </section>
	      </grid>
	    </relatedContent>
	  </listItemLockup>
	  <listItemLockup>
	    <title>About</title>
	    <relatedContent>
   			<header>
   <title>About Philly CocooaHeads</title>
   <description class="descriptionText">Philly CocoaHeads is Philadelphia's premier Apple-related programming group, a chapter of the worldwide CocoaHeads. All skill levels are welcome. The only requirement is an interest in Apple-related technologies and a moderate tolerance for geeking out. Please visit our website for more information on events and other community activities.

http://phillycocoa.org </description>
</header>
	    </relatedContent>
	  </listItemLockup>
        </section>
      </list>
    </catalogTemplate>
  </document>`
}
