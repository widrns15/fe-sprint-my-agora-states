// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";

  li.append(avatarWrapper, discussionContent, discussionAnswered);

  const avatarImg = document.createElement("img");
  avatarImg.className = "discussion__avatar--image";
  avatarImg.src = obj.avatarUrl;
  avatarImg.alt = "avatar of " + obj.author;
  avatarWrapper.append(avatarImg);

  const title = document.createElement("h2");
  title.className = "discussion__title";
  const titleText = document.createElement("a");
  titleText.href = obj.url;
  titleText.innerText = obj.title;
  discussionContent.append(title);
  title.append(titleText);

  const information = document.createElement("div");
  information.className = "discussion__information";
  information.innerText = `${obj.author} / ${obj.createdAt}`;
  discussionContent.append(information);

  const answer = document.createElement("p");
  answer.innerText = isAnswer(obj.answer);
  discussionAnswered.append(answer);

  function isAnswer(answer) {
    if (answer !== null) {
      return "✅";
    } else {
      return "❌";
    }
  }

  return li;
};

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);
