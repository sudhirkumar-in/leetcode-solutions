impl Solution {
    pub fn lexical_order(n: i32) -> Vec<i32> {
        let mut res:Vec<i32> = vec![];
        // dfs generate all digit child
        for val in 1..=9{
            Self::dfs(val,n,&mut res);
        }
        res
    }
    fn dfs(current:i32,n:i32,res:&mut Vec<i32>)->(){
        // end it
        if(current > n){
            return;
        }
        // push the current
        res.push(current);
       // get the children
       for child in 0..=9{
        Self::dfs(current*10+child,n,res); 
       }
    }
}