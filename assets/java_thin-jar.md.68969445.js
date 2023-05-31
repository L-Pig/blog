import{_ as l,H as p,o,c as e,C as s,J as t,E as r,a,V as c}from"./chunks/framework.2956d6af.js";const v=JSON.parse('{"title":"SpringBoot-Jar包瘦身","description":"","frontmatter":{},"headers":[],"relativePath":"java/thin-jar.md","filePath":"java/thin-jar.md","lastUpdated":1685556398000}'),i={name:"java/thin-jar.md"},D=s("h1",{id:"springboot-jar包瘦身",tabindex:"-1"},[a("SpringBoot-Jar包瘦身 "),s("a",{class:"header-anchor",href:"#springboot-jar包瘦身","aria-label":'Permalink to "SpringBoot-Jar包瘦身"'},"​")],-1),y=s("h2",{id:"前言",tabindex:"-1"},[a("前言 "),s("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),F=c(`<h2 id="解决思路如下" tabindex="-1">解决思路如下 <a class="header-anchor" href="#解决思路如下" aria-label="Permalink to &quot;解决思路如下&quot;">​</a></h2><blockquote><p>  在考虑有没有办法把不会修改的jar包(非公司内部jar包)当作外部依赖,每次只打包公司内部开发的jar包,找到以下解决办法</p></blockquote><ol><li><strong>在SpringBoot项目中找到pom.xml文件,修改文件</strong></li></ol><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">plugin</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.springframework.boot</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">spring-boot-maven-plugin</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">configuration</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#676E95;font-style:italic;">&lt;!-- 指定布局 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">ZIP</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#676E95;font-style:italic;">&lt;!-- 指定项目启动类 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mainClass</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">com.example.demo.DemoApplication</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">mainClass</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#676E95;font-style:italic;">&lt;!-- 指定需要和jar包打包在一起的依赖,这里没写的都不会打包进Jar包里。--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">includes</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">include</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">com.example.demo</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">part1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">include</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                       </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">include</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">com.example.demo</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">part2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">include</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                       </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">include</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">com.example.demo</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">part3</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">include</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">includes</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">configuration</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">plugin</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><ol start="2"><li><strong>在classpath下(例如(src/main/resource))添加loader.properties文件,内容如下：</strong><br> 如果不想添加此文件，可以在启动命令中添加参数，即添加 <code>-Dloader.path=lib/,BOOT-INF/lib/</code></li></ol><div class="language-properties line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">properties</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 表示外部依赖的目录</span></span>
<span class="line"><span style="color:#F07178;">loader.path</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">lib/,BOOT-INF/lib/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3"><li><strong>提取外部依赖,(即项目中要使用，但未打包进Jar包中的依赖)</strong><br><code>outputDirectory</code>：表示拷贝的依赖放在当前目录的export-lib文件夹中 <code>includeScope</code>：需要拷贝的依赖的范围是runtime <code>excludeGroupIds</code>：需要排除的依(其实就上面引入的那些项目内部依赖)</li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mvn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dependency:copy-dependencies</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-DoutputDirectory=export-lib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-DincludeScope=runtime</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-DexcludeGroupIds=com.example.demo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li><strong>打包项目( <code>-Dmaven.test.skip=true</code> 表示跳过单元测试,不执行测试用例)</strong></li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mvn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clean</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Dmaven.test.skip=true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="5"><li><strong>启动项目</strong></li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">java</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-jar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">demo-0.0.1-SNAPSHOT.jar</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="layout-的可选值如下" tabindex="-1">LAYOUT 的可选值如下 <a class="header-anchor" href="#layout-的可选值如下" aria-label="Permalink to &quot;LAYOUT 的可选值如下&quot;">​</a></h2><blockquote><ol><li><strong><code>JAR</code>: 可执行jar</strong></li><li><strong><code>WAR</code>: 可执行war， provided依赖放在<code>WEB-INF/lib-provided</code>目录中，以防止war部署在servlet容器会崩溃</strong></li><li><strong><code>ZIP(alias to DIR)</code>: 和JAR布局相似，不同的是可以使用外部配置，而不是JAR布局中的默认配置。</strong></li><li><strong><code>NONE</code>: 打包所有依赖和项目资源，不打包启动加载器（指spring boot loader代码）</strong></li></ol></blockquote>`,14);function d(C,b,u,A,g,m){const n=p("font");return o(),e("div",null,[D,y,s("blockquote",null,[t(n,{color:"LightCoral"},{default:r(()=>[a("  众所周知,SpringBoot打Jar包的时候会把所有依赖的Jar包都打包在BOOT-INF/lib目录下,随着业务越来越复杂,引用的Jar包也就越来越多,导致每次更新版本的时候上传的Jar包越来越大,耗费的时间越来越久,所以本文找了一种解决办法 ")]),_:1})]),F])}const _=l(i,[["render",d]]);export{v as __pageData,_ as default};
