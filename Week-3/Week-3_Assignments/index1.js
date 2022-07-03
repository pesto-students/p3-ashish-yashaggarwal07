    function add(a,b) {
        return a+b 
    }
    //Create a method called memoize such that:
    function memoize(fn){
        const cache = new Map();
        return function(...args){
            if(args.length === 1){
                args.push(0);
            }
            const key = args.toString();
            if(cache.has(key)){
                return cache.get(key)
            }
            cache.set(key, fn(...args));
            return cache.get(key);
        }
    }
    const memoizeAdd = memoize(add);
    //then calling...
    memoizeAdd(100,100);
    //returns 200
    memoizeAdd(100);
    //returns 100
    memoizeAdd(100,200)
    //returns 300
    memoizeAdd(100,100)
    //returns 200 with