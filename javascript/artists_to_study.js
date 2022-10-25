document.addEventListener("DOMContentLoaded", function() {
    var mutationObserver = new MutationObserver(function(m){
        var galleries = gradioApp().querySelectorAll(`div[id^="ats-gallery"]`);
        if (galleries) {
            galleries.forEach(gallery => {
                gallery.querySelectorAll('button').forEach(el => el.addEventListener(
                    "click",
                    event => {
                      const img = el.querySelector("img");
                      if (img){
                        const after_ = img.src.substring(img.src.indexOf('_') + 1);
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
