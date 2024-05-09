// alarmService.js
const saveAlarm = (alarm) => {
    localStorage.setItem('alarm', JSON.stringify(alarm));
  };
  
  export default saveAlarm;
  