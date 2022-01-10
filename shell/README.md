# Shell

reload zsh config files w/o relacing current shell

- source ~/.zshrc

[Your terminal can be much, MUCH more productive](https://medium.com/@ivanaugustobd/your-terminal-can-be-much-much-more-productive-5256424658e8)

After sometime, fzf was working in bash but not in zsh => copied fzf lines from .bashrc to .zshrc

- Entering `!!` will bring up the last command
- Using a -p switch with the mkdir command will allow you to create parent directories as needed. Using brace expansion reduces repetition. For example, `mkdir -p articles/jim/sitepoint/article{1,2,3}`.

- ```shell
  SHELL FUNCTION
  function func(){
  	echo $1
  	sleep 5
  	echo $2
  }
  ```

- `func "first arg" "second arg"`
