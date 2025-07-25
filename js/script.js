        let now = new Date();   // 오늘 날짜로 객체로 지정
        let firstDay = new Date("2025-05-27");      // 시작 날짜를 객체로 지정

        // 기준 : 1970년 1월 1일 0시 0분 0초
        let toNow = now.getTime();      // 오늘까지 지난 시간 (밀리 초 단위)
        let toFirst = firstDay.getTime(); //25.05.27일까지 지난 시간 (밀리 초 단위)
        let passTime = toNow - toFirst // 5월 27일부터 오늘까지 지난 시간 (밀리 초 단위)

        // 밀리 초를 일 수로 계산하고 반올림 (소수 첫째자리에서 반올림해서 정수로 만듦)
        passTime = Math.round(passTime/(1000*60*60*24));
        document.querySelector("#result").innerText = passTime;




        // 한국시간으로 고정 ->ID이름 localtime에 표시
        const options = {
            timeZone: 'Asia/Seoul'
        };
        document.querySelector("#localtime").innerText = (`${now.toLocaleString('ko-KR', options)}`);






        // 화면 축소시 숨김할 것들(햄버거, home-socials)

          function toggleMenuVisibility() {
                const menu = document.getElementById('nav-menu');
                const menu2 = document.getElementById('home-socials');
                const menu3 = document.getElementById('hamburger-folded');

                if (window.innerWidth <= 768) {
                menu.classList.add('hidden');
                menu.classList.remove('nav-menu');
                menu2.classList.add('hidden');
                menu2.classList.remove('home-socials');
                menu3.classList.remove('hidden');
                

                } else {
                menu.classList.remove('hidden');
                menu.classList.add('nav-menu');
                menu2.classList.remove('hidden');
                menu2.classList.add('home-socials');
                menu3.classList.add('hidden');

                }
        }

        // 페이지 로딩 시 한 번 실행
        toggleMenuVisibility();

        // 창 크기 변경될 때마다 체크
        window.addEventListener('resize', toggleMenuVisibility);






        // 햄버거 열기

        function openMenu() {
          const menu = document.getElementById('mobile-menu');
          const showXButton = document.getElementById('hamburger-opened');
          const hideHamButton = document.getElementById('hamburger-folded');

          menu.classList.remove('hidden');

          //hidden 제거하고 지연수 show 클래스 추가
          setTimeout(() => {
          menu.classList.add('show');
          }, 10);
          showXButton.classList.remove('hidden');
          hideHamButton.classList.add('hidden');
        }

        // 햄버거 닫기
        function closeMenu() {
          const menu = document.getElementById('mobile-menu');
          const showXButton = document.getElementById('hamburger-opened');
          const hideHamButton = document.getElementById('hamburger-folded');


          menu.classList.remove('show');

          //애니메이션 완료 후 hidden 추가
          setTimeout(() => {
            menu.classList.add('hidden');
          }, 300);
             
          showXButton.classList.add('hidden');
          hideHamButton.classList.remove('hidden');
        }

        // 버튼 클릭시 alert, 색상 변경
        function clickskills(button) {
          if (button.classList.contains('clicked'))  // 이미 선택되어잇는 상태인데 클릭함
          {button.classList.remove('clicked');
          alert("스킬 선택을 해제했습니다!");
          } else {
          button.classList.add('clicked');
          alert("스킬을 선택했습니다!"); 
          }
        }
