javascript: ( function(){
  function keyUp_event(e) {
      // press B toggle ink tool (unless Text tool is currently selected)
      if (!document.querySelector("#editorFreeText").classList.contains("toggled") && e.code === 'KeyB') {
          document.querySelector("#editorInk").click();
      }
  };
    
  document.addEventListener('keyup', keyUp_event, false);	
} )()
