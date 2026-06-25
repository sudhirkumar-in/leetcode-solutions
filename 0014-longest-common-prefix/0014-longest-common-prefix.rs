impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        let first_word = &strs[0];
        let remaining = &strs[1..];
        let mut res = String::new();
        for (i,ch) in first_word.chars().enumerate(){
             for word in remaining{
                    if word.chars().nth(i)  != Some(ch) {
                       return res;
                    }    
             }
             res.push(ch);
        }
        res
    }
}