let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1;
      let date = today.getDate();
      if ((month+"").length < 2) {       // 일이 한자리 수인 경우 앞에 0을 붙여주기 위해
        month = "0" + month;
      }
      if ((date+"").length < 2) {       // 일이 한자리 수인 경우 앞에 0을 붙여주기 위해
        date = "0" + date;
      }
      var getToday = year+"-"+month+"-"+date; // 오늘 날짜 (2017-02-07)

      document.addEventListener('DOMContentLoaded', function() {
      var calendarEl = document.getElementById('calendar');

        var calendar = new FullCalendar.Calendar(calendarEl, {
          plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
          },
          defaultDate: getToday,
          navLinks: true, // can click day/week names to navigate views
          businessHours: true, // display business hours
          editable: true,
          events: [
            {
              title: '춘천수소거점도시',
              start: '2021-07-03T13:00:00',
              constraint: '춘천수소거점도시'
            },
            {
              title: '수소의 날',
              start: '2021-07-23T13:00:00',
              constraint: '수소의 날'
            },
            {
              title: '행사',
              start: '2021-07-13T11:00:00',
              constraint: '행사', // defined below
              color: '#257e4a'
            },
            {
              title: '한국수소산업협회 정기총회',
              start: '2021-07-18',
              end: '2021-07-20'
            },
            {
              title: '국제수소 엑스포 개막',
              start: '2021-07-29T20:00:00'
            },

            // areas where "Meeting" must be dropped
            {
              groupId: 'availableForMeeting',
              start: '2021-07-11T10:00:00',
              end: '2021-07-11T16:00:00',
              rendering: 'background'
            },
            {
              groupId: 'availableForMeeting',
              start: '2021-07-13T10:00:00',
              end: '2021-07-13T16:00:00',
              rendering: 'background'
            },


            // red areas where no events can be dropped

            {
              start: '2021-07-18',
              end: '2021-07-20',
              overlap: false,
              rendering: 'background',
              color: '#ff9f89'
            },
            {
              start: '2021-07-23',
              end: '2021-07-24',
              overlap: false,
              rendering: 'background',
              color: '#ff9f89'
            },
            {
              start: '2021-07-29',
              end: '2021-07-30',
              overlap: false,
              rendering: 'background',
              color: '#ff9f89'
            }
          ]
        });

        calendar.render();
      });
