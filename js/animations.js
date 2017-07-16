$(document).ready(function () {

var tweetCompose = $(".tweet-compose");
var tweetControls = $("#tweet-controls")
var charCount = $("#char-count")
var tweetSubmit = $("#tweet-submit")
var stream = $('#stream');
var tweet = $('.tweet');
var userName = $('#profile-summary .content p');
var userAvatar = $('#profile-summary .content .avatar');
var stats = $('.stats');

tweetControls.hide();
stats.hide();

tweetCompose.on('click', function(){
       tweetControls.show();
       $(this).css('height', '5em');
});

tweetCompose.keyup(function (){
		var len = $(this).val().length;
		charCount.text(140 - len);
		if (len >= 130) {
			charCount.css('color','red');
		} else {
			charCount.css('color','');
		}
		if (len > 140) {
			tweetSubmit.prop('disabled', true);
		} else {
			tweetSubmit.prop('disabled', false);
		}
});

tweetSubmit.on('click', function() {
	var timeNow = new Date();
	 stream.prepend(
			`<div class="tweet">
						<div class="content">` +
			'<img class="avatar" src="' + userAvatar.attr('src') + '" />' +
							`<strong class="fullname">` + userName.val() + `</strong>` +
							`<span class="username">@JimBobJ</span>` +
							`<p class="tweet-text">` + tweetCompose.val() + `</p>` +

							`<div class="tweet-actions">
								<ul>
									<li><span class="icon action-reply"></span> Reply</li>
									<li><span class="icon action-retweet"></span> Retweet</li>
									<li><span class="icon action-favorite"></span> Favorite</li>
									<li><span class="icon action-more"></span> More</li>
								</ul>
							</div>` +

							`<div class="stats">
								<div class="retweets">
									<p class="num-retweets">0</p>
									<p>RETWEETS</p>
								</div>
								<div class="favorites">
									<p class="num-favorites">0</p>
									<p>FAVORITES</p>
								</div>
								<div class="users-interact">
									<div>
									</div>
								</div>
								<div class="time">` +
								timeNow.getHours() + ':' + timeNow.getMinutes() + ' ' + timeNow.getDate() + ' ' + (timeNow.getMonth()+1) +
								`</div>
							</div>` +
							`<div class="reply">
								<img class="avatar" src="` + userAvatar.attr('src') + `" />` +
								`<textarea class="tweet-compose" placeholder="Reply to @JimbobJ"/></textarea>
							</div>
						</div>
					</div>`
		);
});

stream.on('mouseenter', '.tweet', function(){
		$('.tweet-actions', this).css({
			'visibility': 'visible'
		})
});

stream.on('mouseleave', '.tweet', function(){
		$('.tweet-actions', this).css({
			'visibility': 'hidden'
		})
});

tweet.on('click', function() {
		$(this).children('.content').children('.stats').show();
})


});
