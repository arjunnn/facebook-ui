const fixedEl = document.querySelector('.ad__fixed');
const scrollEl = document.querySelector('.ad__scroll');
const tickerEl = document.querySelector('.ticker');
const feedEl = document.querySelector('.newsfeed__content');
const postEl = document.querySelector('.post__button');
// console.log(lastPostEl);

window.addEventListener('scroll', function(e) {
	if(fixedEl.getBoundingClientRect().top <= 50) {
		fixedEl.classList.add("fixed");
    // console.log(scrollEl.getBoundingClientRect())
    fixedEl.width = scrollEl.getBoundingClientRect().width;
	}
	if(scrollEl.getBoundingClientRect().bottom >= 50) {
		fixedEl.classList.remove("fixed");
	}
  let lastPostEl = document.querySelector('.newsfeed__content').lastElementChild;
	let updateFeed = checkVisible(lastPostEl, 1);
	if(updateFeed) {
    let childEl = feedEl.childNodes[1].cloneNode(true);
		feedEl.appendChild(childEl);
	}
});

tickerEl.addEventListener('scroll', function(e) {
	let updateTicker = checkVisible(this.lastElementChild, 2);
	if(updateTicker) {
    let childEl = this.childNodes[1].cloneNode(true);
		this.appendChild(childEl);
	}	
});

postEl.addEventListener('click', function(e) {
  let composerEl = document.querySelector('.post__composer textarea');
  if(composerEl.value.split(' ').join('') === "") {
    return alert("Post cannot be empty");
  }
  else {
    let details = {
      poster: "Namey McNameface",
      photo: "",
      audience: "only you",
      time: "just now",
      content: `${composerEl.value}`,
      likers: [
        "Boaty McBoatface",
        "Anonymous Beaver"
      ]
    }
    let postEl = document.createElement("div");
    postEl.classList.add("post__card");
    postEl.innerHTML = `
      			<a href="#"><div class="caret"></div></a>
			<div class="post__header">
				<a href=""><img src="${details.photo || "https://placehold.it/30x30.jpg"}" alt="${details.poster}'s photo" /></a>
				<div class="post__details">
					<a href=""><span class="post__name">${details.poster}</span><br /></a>
					<span>
						<a href=""><span class="post__timestamp">${details.time}</span></a>
						<a href=""><span class="post__audience">${details.audience}</span></a>
					</span>
				</div>
		</div>
		<div class="post__content">
			<p>${details.content}</p>
		</div>
		<hr />
		<div class="post__actions">
			<a href=""><span class="action__like">Like</span></a>
			<a href=""><span class="action__comment">Comment</span></a>
			<a href=""><span class="action__share">Share</span></a>
		</div>
    `;


    let reactionsEl = document.createElement("div");
    reactionsEl.classList.add("post__reactions");
    reactionsEl.innerHTML = `
      <a href="#"><span>${details.likers[0]}, ${details.likers[1]} and 2 others</span></a>
    `
    
    let firstEl = feedEl.childNodes[1];
    feedEl.insertBefore(reactionsEl, firstEl);
    firstEl = feedEl.childNodes[1];
    feedEl.insertBefore(postEl, firstEl);        
    composerEl.value = "";
  }

});

function checkVisible(elm, i) {
	var rect = elm.getBoundingClientRect();
	var viewHeight = Math.max(document.documentElement.clientHeight/i, window.innerHeight/i);
	return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

