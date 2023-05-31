import{_ as e,o as t,c as a,V as o}from"./chunks/framework.2956d6af.js";const p=JSON.parse('{"title":"Git 常用指令","description":"","frontmatter":{},"headers":[],"relativePath":"sundry/git-command.md","filePath":"sundry/git-command.md","lastUpdated":1685556398000}'),i={name:"sundry/git-command.md"},d=o('<h1 id="git-常用指令" tabindex="-1">Git 常用指令 <a class="header-anchor" href="#git-常用指令" aria-label="Permalink to &quot;Git 常用指令&quot;">​</a></h1><h2 id="git基本概念" tabindex="-1">Git基本概念 <a class="header-anchor" href="#git基本概念" aria-label="Permalink to &quot;Git基本概念&quot;">​</a></h2><ul><li><code>工作区</code> 本地仓库所在的目录，简而言之就是你在电脑上看到的目录，工作区的内容包含提交到暂存区和版本库的内容，也包含自己修改的内容</li><li><code>暂存区</code> 本地仓库中的一个分支，用于存放工作区中的修改，是我们把修改提交版本库前的一个过渡阶段。查看GIT自带帮助手册的时候，通常以index来表示暂存区。在工作目录下有一个.git的目录，里面有个index文件，存储着关于暂存区的内容。git add命令将工作区内容添加到暂存区。</li><li><code>本地仓库</code> 本地仓库中的一个分支，用于存放暂存区中的修改，版本控制系统的仓库，存在于本地。当执行git commit命令后，会将暂存区内容提交到仓库之中。在工作区下面有.git的目录，这个目录下的内容不属于工作区，里面便是仓库的数据信息，暂存区相关内容也在其中。这里也可以使用merge或rebase将远程仓库副本合并到本地仓库。图中的只有merge，注意这里也可以使用rebase。</li><li><code>远程仓库</code> 位于远程服务器上的仓库，与本地仓库概念基本一致，不同之处在于一个存在远程，可用于远程协作，一个却是存在于本地。通过push/pull可实现本地与远程的交互。</li></ul><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p><code>git config --global user.name &lt;user-name&gt;</code> 配置用户名<br><code>git config --global user.email &lt;user-email&gt;</code> 配置邮箱<br><code>git remote set-url origin &lt;repository-address&gt;</code> 修改仓库地址<br><code>git config --global --unset http.proxy</code> 取消代理<br><code>git config user.name</code> 查看用户名<br><code>git config user.email</code> 查看邮箱</p><h2 id="编辑git配置文件" tabindex="-1">编辑Git配置文件 <a class="header-anchor" href="#编辑git配置文件" aria-label="Permalink to &quot;编辑Git配置文件&quot;">​</a></h2><p><code>git config --global -e</code> 编辑全局配置文件<br><code>git config -e</code> 编辑当前仓库配置文件</p><h2 id="初始化一个git仓库" tabindex="-1">初始化一个Git仓库 <a class="header-anchor" href="#初始化一个git仓库" aria-label="Permalink to &quot;初始化一个Git仓库&quot;">​</a></h2><p><code>git init</code></p><h2 id="为本地仓库添加远程仓库地址" tabindex="-1">为本地仓库添加远程仓库地址 <a class="header-anchor" href="#为本地仓库添加远程仓库地址" aria-label="Permalink to &quot;为本地仓库添加远程仓库地址&quot;">​</a></h2><p><code>git remote add origin &lt;repository-address&gt;</code></p><h2 id="克隆" tabindex="-1">克隆 <a class="header-anchor" href="#克隆" aria-label="Permalink to &quot;克隆&quot;">​</a></h2><p><code>git clone &lt;repository-address&gt;</code></p><h2 id="拉取代码" tabindex="-1">拉取代码 <a class="header-anchor" href="#拉取代码" aria-label="Permalink to &quot;拉取代码&quot;">​</a></h2><p><code>git pull</code> 拉取代码并合并<br><code>git pull -r</code> 拉取代码并合并(强制)</p><h2 id="查看远程仓库地址" tabindex="-1">查看远程仓库地址 <a class="header-anchor" href="#查看远程仓库地址" aria-label="Permalink to &quot;查看远程仓库地址&quot;">​</a></h2><p><code>git remote -v</code></p><h2 id="查看分支" tabindex="-1">查看分支 <a class="header-anchor" href="#查看分支" aria-label="Permalink to &quot;查看分支&quot;">​</a></h2><p><code>git branch</code> 查看当前分支<br><code>git branch -r</code> 查看远程分支<br><code>git branch -a</code> 查看所有分支</p><h2 id="切换分支" tabindex="-1">切换分支 <a class="header-anchor" href="#切换分支" aria-label="Permalink to &quot;切换分支&quot;">​</a></h2><p><code>git checkout &lt;branch-name&gt;</code></p><h2 id="创建分支" tabindex="-1">创建分支 <a class="header-anchor" href="#创建分支" aria-label="Permalink to &quot;创建分支&quot;">​</a></h2><p><code>git branch &lt;branch-name&gt;</code> 只创建分支<br><code>git checkout -b &lt;branch-name&gt;</code> 创建并切换分支<br><code>git baranch --set-upstream-to=origin/&lt;branch-name&gt; &lt;branch-name&gt;</code> 设置本地分支与远程分支的链接</p><h2 id="删除分支" tabindex="-1">删除分支 <a class="header-anchor" href="#删除分支" aria-label="Permalink to &quot;删除分支&quot;">​</a></h2><p><code>git branch -d &lt;branch-name&gt;</code> 删除本地分支<br><code>git push origin --delete &lt;branch-name&gt;</code> 删除远程分支</p><h2 id="合并分支" tabindex="-1">合并分支 <a class="header-anchor" href="#合并分支" aria-label="Permalink to &quot;合并分支&quot;">​</a></h2><p><code>git merge &lt;branch-name&gt;</code> 合并指定分支到当前分支</p><h2 id="重命名分支" tabindex="-1">重命名分支 <a class="header-anchor" href="#重命名分支" aria-label="Permalink to &quot;重命名分支&quot;">​</a></h2><p><code>git branch -m &lt;old-branch-name&gt; &lt;new-branch-name&gt;</code> 重命名指定分支<br><code>git branch -m &lt;new-branch-name&gt;</code> 重命名当前分支</p><h2 id="删除暂存区文件" tabindex="-1">删除暂存区文件 <a class="header-anchor" href="#删除暂存区文件" aria-label="Permalink to &quot;删除暂存区文件&quot;">​</a></h2><p><code>git rm &lt;file-name&gt;</code> 删除暂存区文件，并删除本地文件<br><code>git rm -r &lt;dir-name&gt;</code> 删除暂存区文件，并删除本地文件<br><code>git rm -rf &lt;dir-name&gt;</code> 删除暂存区文件，并删除本地文件<br><code>git rm --cached &lt;file-name&gt;</code> 删除暂存区文件，但不删除本地文件</p><h2 id="查看当前状态" tabindex="-1">查看当前状态 <a class="header-anchor" href="#查看当前状态" aria-label="Permalink to &quot;查看当前状态&quot;">​</a></h2><p><code>git status</code></p><h2 id="添加文件到暂存区" tabindex="-1">添加文件到暂存区 <a class="header-anchor" href="#添加文件到暂存区" aria-label="Permalink to &quot;添加文件到暂存区&quot;">​</a></h2><p><code>git add .</code> 添加所有文件到暂存区<br><code>git add -A</code> 添加所有文件到暂存区<br><code>git add -u</code> 添加所有修改和删除的文件到暂存区<br><code>git add &lt;file-name&gt;</code> 添加指定文件到暂存区</p><h2 id="提交暂存区到本地仓库" tabindex="-1">提交暂存区到本地仓库 <a class="header-anchor" href="#提交暂存区到本地仓库" aria-label="Permalink to &quot;提交暂存区到本地仓库&quot;">​</a></h2><p><code>git commit -m &lt;commit-message&gt;</code></p><h2 id="推送本地仓库到远程仓库" tabindex="-1">推送本地仓库到远程仓库 <a class="header-anchor" href="#推送本地仓库到远程仓库" aria-label="Permalink to &quot;推送本地仓库到远程仓库&quot;">​</a></h2><p><code>git push</code> 推送本地仓库到远程仓库<br><code>git push -f</code> 推送本地仓库到远程仓库(强制)<br><code>git push origin &lt;branch-name&gt;</code> 推送本地仓库到远程仓库</p><h2 id="查看提交日志" tabindex="-1">查看提交日志 <a class="header-anchor" href="#查看提交日志" aria-label="Permalink to &quot;查看提交日志&quot;">​</a></h2><p><code>git log</code> 查看提交日志<br><code>git log --oneline</code> 查看提交日志(简洁版)<br><code>git reflog</code> 查看提交日志(包含回滚)</p><h2 id="撤销修改" tabindex="-1">撤销修改 <a class="header-anchor" href="#撤销修改" aria-label="Permalink to &quot;撤销修改&quot;">​</a></h2><p><code>git checkout &lt;file-name&gt;</code> 撤销指定文件的修改<br><code>git checkout .</code> 撤销所有文件的修改</p><h2 id="回滚" tabindex="-1">回滚 <a class="header-anchor" href="#回滚" aria-label="Permalink to &quot;回滚&quot;">​</a></h2><p><code>git reset --hard &lt;commit-id&gt;</code> 回滚到指定提交<br><code>git reset --hard HEAD^</code> 回滚到上一次提交<br><code>git reset --hard HEAD^^</code> 回滚到上上次提交<br><code>git reset --hard HEAD~n</code> 回滚到上n次提交<br><code>git reset --soft &lt;commit-id&gt;</code> 回滚到指定提交，并保留修改<br><code>git reset --soft HEAD^</code> 回滚到上一次提交，并保留修改<br><code>git reset --soft HEAD^^</code> 回滚到上上次提交，并保留修改<br><code>git reset --soft HEAD~n</code> 回滚到上n次提交，并保留修改<br><code>git reset --mixed &lt;commit-id&gt;</code> 回滚到指定提交，并保留修改到暂存区<br><code>git reset --mixed HEAD^</code> 回滚到上一次提交，并保留修改到暂存区<br><code>git reset --mixed HEAD^^</code> 回滚到上上次提交，并保留修改到暂存区<br><code>git reset --mixed HEAD~n</code> 回滚到上n次提交，并保留修改到暂存区</p><h2 id="比较差异" tabindex="-1">比较差异 <a class="header-anchor" href="#比较差异" aria-label="Permalink to &quot;比较差异&quot;">​</a></h2><p><code>git diff</code> 比较工作区和暂存区的差异<br><code>git diff tmp</code> 比较本地tmp分支与远程origin/master分支的差别<br><code>git diff &lt;commit-id&gt;</code> 比较工作区和指定提交的差异<br><code>git diff &lt;commit-id1&gt; &lt;commit-id2&gt;</code> 比较两次提交的差异</p><h2 id="变基" tabindex="-1">变基 <a class="header-anchor" href="#变基" aria-label="Permalink to &quot;变基&quot;">​</a></h2><p><code>git rebase &lt;branch-name&gt;</code> 变基到指定分支<br><code>git rebase &lt;branch-name1&gt; &lt;branch-name2&gt;</code> 把分支1变基到分支2<br><code>git rebase --continue</code> 继续变基<br><code>git rebase --abort</code> 取消变基</p><h2 id="标签" tabindex="-1">标签 <a class="header-anchor" href="#标签" aria-label="Permalink to &quot;标签&quot;">​</a></h2><p><code>git tag</code> 查看所有标签<br><code>git tag &lt;tag-name&gt;</code> 创建标签<br><code>git tag -a &lt;tag-name&gt; -m &lt;tag-message&gt;</code> 创建带注释的标签<br><code>git tag -d &lt;tag-name&gt;</code> 删除标签<br><code>git push origin &lt;tag-name&gt;</code> 推送标签到远程仓库<br><code>git push origin --tags</code> 推送所有标签到远程仓库<br><code>git push origin :refs/tags/&lt;tag-name&gt;</code> 删除远程标签</p><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p><code>git stash</code> 暂存当前修改<br><code>git stash list</code> 查看暂存列表<br><code>git stash apply</code> 恢复暂存的修改<br><code>git stash drop</code> 删除暂存的修改</p><h2 id="下拉远程仓库所有内容" tabindex="-1">下拉远程仓库所有内容 <a class="header-anchor" href="#下拉远程仓库所有内容" aria-label="Permalink to &quot;下拉远程仓库所有内容&quot;">​</a></h2><p><code>git fetch --all</code></p><h2 id="cherry-pick" tabindex="-1">cherry-pick <a class="header-anchor" href="#cherry-pick" aria-label="Permalink to &quot;cherry-pick&quot;">​</a></h2><p><code>git cherry-pick &lt;commit-id&gt;</code> 选择一个提交，合并到当前分支<br><code>git cherry-pick &lt;commit-id1&gt; &lt;commit-id2&gt;</code> 选择多个提交，合并到当前分支<br><code>git cherry-pick &lt;commit-id1&gt;..&lt;commit-id2&gt;</code> 选择一段连续的提交，合并到当前分支<br><code>git cherry-pick &lt;commit-id1&gt; &lt;commit-id2&gt; -n</code> 选择多个提交，合并到当前分支，但不提交<br><code>git cherry-pick &lt;commit-id1&gt; &lt;commit-id2&gt; -e</code> 选择多个提交，合并到当前分支，但不提交，编辑提交信息</p>',57),r=[d];function c(l,h,n,g,s,b){return t(),a("div",null,r)}const u=e(i,[["render",c]]);export{p as __pageData,u as default};
