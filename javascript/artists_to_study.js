document.addEventListener("DOMContentLoaded", function() {
    var mutationObserver = new MutationObserver(function(m){
        var galleries = gradioApp().querySelectorAll(`div[id^="ats-gallery"]`);
        if (galleries) {
            galleries.forEach(gallery => {
                gallery.querySelectorAll('button').forEach(el => el.addEventListener(
                    "click",
                    event => {
                      const div = el.querySelector('div');
                      if (div){
                        const inside_div = div.querySelector('div').textContent
                        const after_ = inside_div.substring(inside_div.indexOf('_') + 1);
                        const before_ = after_.substring(0, after_.indexOf('_'));
                        navigator.clipboard.writeText(decodeURI(before_));
                      } 
                    }
                  ));
              });
        }
    });
    mutationObserver.observe( gradioApp(), { childList:true, subtree:true });
});
