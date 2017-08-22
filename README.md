# queue-event
=======

Queue-Event is an event manager for Javascript and JSX which supports queues and priority.

Usage
-----
```
<script src="queue-event.js"></script>

<script>
	var EventManager = new QueueEvent();

	EventManager.addListener('after_apply_point',10,function(param1,param2){
		alert(param1);
		alert(param2);
	})
	EventManager.addListener('after_apply_point',1,function(){
		alert(2);
	})

	EventManager.addListener('before_apply_point',10,function(){
		alert(3);
	})

	EventManager.addListener('before_apply_point',10,function(){
		alert(4);
	})

	EventManager.addListener('before_apply_point',11,function(){
		alert(1);
	})

	EventManager.fire('after_apply_point',[101,102]);
	EventManager.fire('before_apply_point');
</script>
```

