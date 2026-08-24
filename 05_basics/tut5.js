// for each loop

const coding = ["js", "rubby" , "java", "python" , "c++"] 

coding.forEach( function (item ) {
 //console.log(item);
    } )

coding.forEach(  (arrow) => {
   // console.log(arrow);
});

coding.forEach( ( i, array , index  ) => {
  ///  console.log(i , array , index  ) 
})

const myCoding = [ 
    {
        languageNamee: "javascript",
        languageFile: "js"
    },
        {
        languageNamee: "python",
        languageFile: "py"
    },
        {
        languageNamee: "cpp",
        languageFile: "c++"
    },
]
    
myCoding.forEach( function (obj, index  ) {
    console.log((obj.file), index, ) ;
})