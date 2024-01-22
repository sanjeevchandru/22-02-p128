document.write("93. to find the maximum difference among all possible pairs of a given array of integers."+"<br>");
function test93(arr){
    var r=0;
    for(let i=0;i<arr.length;i++){
        for(let k=0;k<arr.length;k++){
            var x=Math.abs(arr[i]-arr[k]);
            r=Math.max(r,x);
        }
    }
    return r;
}
document.write("The array :[1,2,3,8,9] , Ans :"+test93([1, 2, 3, 8, 9])+"<br><br>");