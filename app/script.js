document.addEventListener('DOMContentLoaded', function() {
  const landingPage = document.getElementById('landing-page');
  const mainApp = document.getElementById('main-app');

  const loginOption = document.getElementById('login-option');
  const registerOption = document.getElementById('register-option');
  const forgotOption = document.getElementById('forgot-option');

  const showLogin = document.getElementById('show-login');
  const showRegister = document.getElementById('show-register');
  const showForgot = document.getElementById('show-forgot');

  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const forgotForm = document.getElementById('forgot-form');

  function showOption(option) {
      [loginOption, registerOption, forgotOption].forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');
  }

  showLogin.addEventListener('click', (e) => {
      e.preventDefault();
      showOption(loginOption);
  });

  showRegister.addEventListener('click', (e) => {
      e.preventDefault();
      showOption(registerOption);
  });

  showForgot.addEventListener('click', (e) => {
      e.preventDefault();
      showOption(forgotOption);
  });

  loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // 여기에 로그인 로직을 구현합니다.
      alert('로그인 성공');
      landingPage.classList.remove('active');
      landingPage.classList.add('hidden');
      mainApp.classList.remove('hidden');
      mainApp.classList.add('active');
  });

  registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // 여기에 회원가입 로직을 구현합니다.
      alert('회원가입 성공');
  });

  forgotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // 여기에 아이디/비밀번호 찾기 로직을 구현합니다.
      alert('아이디/비밀번호 찾기 이메일 전송');
  });

  // 메인 앱 네비게이션
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('main section');

  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          sections.forEach(section => {
              section.classList.remove('active');
          });
          document.getElementById(targetId).classList.add('active');
      });
  });

  // 디스펜서 관리 - 수정하기 버튼
  document.getElementById('edit-dispenser').addEventListener('click', function() {
      alert('디스펜서 설정을 수정합니다.');
  });

  // 강아지 정보 저장
  document.getElementById('dog-form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('강아지 정보가 저장되었습니다.');
      // 여기에 강아지 프로필을 목록에 추가하는 로직을 구현할 수 있습니다.
  });

  // 자동 급여 설정 저장
  document.getElementById('auto-feed-form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('자동 급여 설정이 저장되었습니다.');
      // 여기에 설정을 현재 설정사항에 추가하는 로직을 구현할 수 있습니다.
  });

  // 영양제 기록하기
  document.getElementById('supplement-form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('영양제 기록이 저장되었습니다.');
      // 여기에 기록을 내역에 추가하는 로직을 구현할 수 있습니다.
  });

  // 초기에 로그인 옵션을 보여줍니다.
  showOption(loginOption);
});


// 마이페이지 탭 기능
const mypageTabs = document.querySelectorAll('.mypage-tab');
const mypageContents = document.querySelectorAll('.mypage-content');

mypageTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.target;
        
        mypageTabs.forEach(t => t.classList.remove('active'));
        mypageContents.forEach(c => c.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});

// 회원정보 수정 폼 제출
document.getElementById('user-info-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('회원정보가 수정되었습니다.');
});

// 회원탈퇴 폼 제출
document.getElementById('delete-account-form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (confirm('정말로 탈퇴하시겠습니까?')) {
        alert('회원탈퇴가 완료되었습니다.');
        // 여기에 실제 회원탈퇴 로직을 구현합니다.
    }
});

// 홈 탭 기능
const homeTabs = document.querySelectorAll('.home-tab');
const homeContents = document.querySelectorAll('.home-content');

homeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.target;

        homeTabs.forEach(t => t.classList.remove('active'));
        homeContents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});

// 디스펜서 관리 탭 기능
const dispenserTabs = document.querySelectorAll('.dispenser-tab');
const dispenserContents = document.querySelectorAll('.dispenser-content');

dispenserTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.target;

        dispenserTabs.forEach(t => t.classList.remove('active'));
        dispenserContents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});

// 기존의 디스펜서 수정 버튼 기능
document.getElementById('edit-dispenser').addEventListener('click', function() {
    alert('디스펜서 설정을 수정합니다.');
});


document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('main section');
  const tipCards = document.querySelectorAll('.tip-card');
  const popup = document.getElementById('tip-popup');
  const popupTitle = document.getElementById('popup-title');
  const popupText = document.getElementById('popup-text');
  const closePopup = document.getElementById('close-popup');

  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          navLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
          const target = this.getAttribute('href').substring(1);
          sections.forEach(section => {
              section.classList.remove('active');
              if (section.id === target) {
                  section.classList.add('active');
              }
          });
      });
  });

  const tipData = [
      {
          title: "강아지 영양 관리의 기본",
          content: "강아지의 건강한 삶을 위해서는 균형 잡힌 영양 섭취가 중요합니다. 단백질, 탄수화물, 지방, 비타민, 미네랄을 적절히 포함한 식단을 제공하세요. 또한, 강아지의 나이, 크기, 활동량에 따라 식사량을 조절해야 합니다."
      },
      {
          title: "강아지 운동의 중요성",
          content: "규칙적인 운동은 강아지의 신체적, 정신적 건강에 필수적입니다. 매일 30분에서 2시간 정도의 산책이나 놀이 시간을 가져주세요. 이는 비만 예방, 근육 강화, 스트레스 해소에 도움이 됩니다."
      },
      {
          title: "강아지 치아 관리 방법",
          content: "강아지의 치아 건강은 전체적인 건강과 직결됩니다. 주 2-3회 이상 치약을 이용해 칫솔질을 해주고, 치석 제거에 도움이 되는 간식을 제공하세요. 정기적인 수의사 검진을 통해 치주 질환을 예방할 수 있습니다."
      }
  ];

  tipCards.forEach(card => {
      card.addEventListener('click', function() {
          const tipId = this.getAttribute('data-tip-id');
          const tip = tipData[tipId - 1];
          popupTitle.textContent = tip.title;
          popupText.textContent = tip.content;
          popup.style.display = 'flex';
      });
  });

  closePopup.addEventListener('click', function() {
      popup.style.display = 'none';
  });

  // 알림 버튼 기능 (예시)
  document.getElementById('notification-btn').addEventListener('click', function() {
      alert('새로운 알림이 없습니다.');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const dogList = document.getElementById('dog-list');
  const modal = document.getElementById('dog-detail-modal');
  const closeBtn = modal.querySelector('.close');
  const modalDogName = document.getElementById('modal-dog-name');
  const modalDogImage = document.getElementById('modal-dog-image');
  const modalDogInfo = document.getElementById('modal-dog-info');
  const modalDogHealth = document.getElementById('modal-dog-health');

  // 목업 데이터
  const dogDetails = {
      1: {
          name: "멍멍이",
          image: "golden_retriever.png",
          info: "멍멍이는 3세의 활발한 골든리트리버입니다. 몸무게는 30kg으로 건강한 체중을 유지하고 있습니다.",
          health: "멍멍이는 전반적으로 건강한 상태입니다. 정기적인 운동과 균형 잡힌 식단으로 건강을 유지하고 있습니다. 최근 건강검진 결과 모든 지표가 정상 범위 내에 있었습니다. 다만, 털 빠짐이 다소 있어 정기적인 브러싱이 필요합니다. 또한, 치석 예방을 위해 주 2-3회 치아 관리를 하고 있습니다."
      },
      2: {
          name: "뭉치",
          image: "bichon_frise.png",
          info: "뭉치는 5세의 온순한 비숑프리제입니다. 몸무게는 7kg으로 약간의 다이어트가 필요한 상태입니다.",
          health: "뭉치는 전반적으로 건강하나, 음식 알러지가 있습니다. 특히 닭고기에 대한 알러지 반응이 있어 주의가 필요합니다. 알러지 증상으로는 피부 가려움과 소화기 문제가 나타날 수 있습니다. 현재 처방된 특수 사료를 먹고 있으며, 간식 급여 시 주의가 필요합니다. 또한, 정기적인 피부 관리와 목욕이 중요합니다. 체중 관리를 위해 규칙적인 운동을 하고 있으며, 점진적으로 체중을 줄이고 있는 중입니다."
      },
      3: {
          name: "초코",
          image: "poodle.png",
          info: "초코는 2세의 장난기 많은 푸들입니다. 몸무게는 5kg으로 적정 체중을 유지하고 있습니다.",
          health: "초코는 전반적으로 활발하고 건강하나, 치아 문제가 있습니다. 최근 치과 검진 결과, 경미한 치주염이 발견되어 치료 중입니다. 현재 하루 두 번 칫솔질을 하고 있으며, 치석 제거에 도움이 되는 특수 간식을 급여하고 있습니다. 또한, 정기적인 치과 검진을 받고 있습니다. 치아 문제 외에는 특별한 건강 문제는 없으며, 예방 접종도 정기적으로 받고 있습니다. 활발한 성격으로 충분한 운동량을 유지하고 있어 비만 등의 문제는 없습니다."
      }
  };

  dogList.addEventListener('click', function(e) {
      if (e.target.classList.contains('detail-btn')) {
          const dogId = e.target.closest('li').dataset.dogId;
          const dogData = dogDetails[dogId];
          
          modalDogName.textContent = dogData.name;
          modalDogImage.src = dogData.image;
          modalDogImage.alt = dogData.name;
          modalDogInfo.textContent = dogData.info;
          modalDogHealth.textContent = dogData.health;
          
          modal.style.display = "block";
      }
  });

  closeBtn.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});

document.getElementById('auto-feed-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const time = document.getElementById('feed-time').value;
  const name = document.getElementById('supplement-name').value;
  const count = document.getElementById('supplement-count').value;
  
  const newSetting = `${time} - ${name} ${count}개`;
  
  const li = document.createElement('li');
  li.textContent = newSetting;
  
  document.getElementById('feed-settings-list').appendChild(li);
  
  // 폼 초기화
  this.reset();
});

document.addEventListener('DOMContentLoaded', function() {
  const dogForm = document.getElementById('dog-form');
  const dogList = document.getElementById('dog-list');

  dogForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('dog-name').value;
      const age = document.getElementById('dog-age').value;
      const breed = document.getElementById('dog-breed').value;
      const weight = document.getElementById('dog-weight').value;
      const health = document.getElementById('dog-health').value;
      const imageInput = document.getElementById('dog-image');
      
      let imageSrc = 'default-dog.png';
      if (imageInput.files && imageInput.files[0]) {
          imageSrc = URL.createObjectURL(imageInput.files[0]);
      }

      const newDog = {
          name: name,
          age: age,
          breed: breed,
          weight: weight,
          health: health,
          image: imageSrc
      };

      addDogToList(newDog);
      dogForm.reset();
  });

  function addDogToList(dog) {
      const li = document.createElement('li');
      li.innerHTML = `
          <img src="${dog.image}" alt="${dog.name}" class="dog-profile-image">
          <div class="dog-info">
              <span class="dog-name">${dog.name}</span>
              <span class="dog-details">${dog.age}세, ${dog.breed}</span>
              <span class="dog-weight">${dog.weight}kg</span>
              <span class="dog-health">${dog.health}</span>
          </div>
          <button class="detail-btn">상세보기</button>
      `;
      dogList.appendChild(li);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const supplementForm = document.getElementById('supplement-form');
  const historyList = document.getElementById('history-list');

  supplementForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const date = document.getElementById('record-date').value;
      const name = document.getElementById('supplement-name').value;
      const count = document.getElementById('supplement-count').value;
      const condition = document.getElementById('dog-condition').value;

      const newRecord = `${date} - ${name} ${count}개, 상태: ${condition}`;

      const li = document.createElement('li');
      li.textContent = newRecord;

      historyList.appendChild(li);

      supplementForm.reset();
  });
});
