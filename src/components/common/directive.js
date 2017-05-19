var reClass = {};
reClass.install = function(Vue, options) {
    
    Vue.directive('re', {
        bind: function(el, binding, vnode) {
            var vm = vnode.context;
            
            el.addEventListener('click', function(e) {
                var label = el.getElementsByClassName('is-visible');
                var len = label.length;
                len && removeClass(label[0], 'is-visible');
                e.preventDefault();
                
            })
        }
    });
    Vue.directive('rp', {
        bind: function(el, binding, vnode) {
           
            
            el.addEventListener('focus', function(e) {
                return false;
                
            })
        }
    })

}
function hasClass(obj, cls) {  
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}  
  
function addClass(obj, cls) {  
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;  
}  
  
function removeClass(obj, cls) {  
    if (hasClass(obj, cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj.className = obj.className.replace(reg, ' ');  
    }  
} 



module.exports = reClass;