define(["jquery","knockout","config/config","service","underscore"],function(e,r,o,t,n){function a(){var o=this;o.restart=function(){showConfirm("restart_confirm",function(){showLoading("restarting"),t.restart({},function(e){e&&"success"==e.result?successOverlay():errorOverlay()},e.noop)})};var n=t.getRebootInfo();o.enableReboot=r.observable("1"==n.reboot_schedule_enable),o.isAllowedReboot=r.observable(n.reboot_schedule_enable),o.isRebootMode=r.observable(n.reboot_schedule_mode),o.weekHour=r.observable(i(n.reboot_hour1)),o.weekMinutes=r.observable(i(n.reboot_min1)),o.monthHour=r.observable(i(n.reboot_hour2)),o.monthMinutes=r.observable(i(n.reboot_min2)),o.intervalHour_week=r.observable(i(n.reboot_threshold_hours1)),o.intervalHour_day=r.observable(i(n.reboot_threshold_hours2)),o.restartRules=r.observable(l),o.intervalDay=r.observable(u),o.intervalWeeks=r.observable(b),o.currentIntervalWeek=r.observable(n.reboot_dow),o.currentIntervals=r.observable(n.reboot_dod),o.apply=function(){if(!t.getSysTimeMode())return showAlert("system_time_not_syn"),!1;showLoading("operating");var e={};e.goformId="FIX_TIME_REBOOT_SCHEDULE",e.reboot_schedule_enable=o.isAllowedReboot(),e.reboot_schedule_mode=o.isRebootMode(),e.reboot_hour1=o.weekHour(),e.reboot_min1=o.weekMinutes(),e.reboot_hour2=o.monthHour(),e.reboot_min2=o.monthMinutes(),e.reboot_timeframe_hours1=o.intervalHour_week(),e.reboot_timeframe_hours2=o.intervalHour_day(),e.reboot_dow=o.currentIntervalWeek(),e.reboot_dod=o.currentIntervals(),t.setRebootScheduleFixTime(e,function(e){"success"==e.result?successOverlay():errorOverlay()})}}function i(e){return""!=e&&" "!=e||(e=0),e<10?"0"+parseInt(e,10):e}function s(){var o=new a;r.applyBindings(o,e("#container")[0]),e("#frmRestart").validate({submitHandler:function(){o.restart()}}),e("#enableRebootFrm").validate({submitHandler:function(){o.apply()},rules:{weekTimeHour:{any_digits:!0,range:[0,23]},weekTimeMinutes:{any_digits:!0,range:[0,59]},monthTimeHour:{any_digits:!0,range:[0,23]},monthTimeMinutes:{any_digits:!0,range:[0,59]},intervalHourWeek:{any_digits:!0,range:[1,6]},intervalHourDay:{any_digits:!0,range:[1,6]}},groups:{weekTime:"weekTimeHour weekTimeMinutes",monthTime:"monthTimeHour monthTimeMinutes"},errorPlacement:function(e,r){"weekTimeHour"==r.attr("name")||"weekTimeMinutes"==r.attr("name")?e.insertAfter("#weekTimeError"):"monthTimeHour"==r.attr("name")||"monthTimeMinutes"==r.attr("name")?e.insertAfter("#intervalTimeError"):"intervalHourWeek"==r.attr("name")?e.insertAfter("#weekIntervalError"):"intervalHourDay"==r.attr("name")?e.insertAfter("#dayIntervalError"):e.insertAfter(r)}})}var u=[];!function(e,r,o){for(var t={},n=e;n<=r;n++)t.name=n,t.value=n,o.push(new Option(t.name,t.value))}(1,30,u);var l=n.map(o.restartScheduleRules,function(e){return new Option(e.name,e.value)}),b=n.map(o.dstWeeks,function(e){return new Option(e.name,e.value)});return{init:s}});
//# sourceMappingURL=../../sourcemaps/adm/restart.js.map
