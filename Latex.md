# Writing Latex in Github Readme

### Using External Website
A stop gap solution a site https://www.codecogs.com/latex/eqneditor.php that generates embedded links with TeX editor that then embeds a gif in GitHub :-

`<a href="https://www.codecogs.com/eqnedit.php?latex=\mathcal{W}(A,f)&space;=&space;(T,\bar{f})" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\mathcal{W}(A,f)&space;=&space;(T,\bar{f})" title="\mathcal{W}(A,f) = (T,\bar{f})" /></a>
` 

renders

<a href="https://www.codecogs.com/eqnedit.php?latex=\mathcal{W}(A,f)&space;=&space;(T,\bar{f})" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\mathcal{W}(A,f)&space;=&space;(T,\bar{f})" title="\mathcal{W}(A,f) = (T,\bar{f})" /></a>

\mathcal{W}(A,f) = (T,\bar{f})

double click on the equation to be taken to the editor ;)

#### Limitation

It would be very easy to make a similar webapp to codecogs https://www.codecogs.com/latex/eqneditor.php. This would give the security isolation that GitHub needs by having it as a separate web based application.

It would be useful to attach persistant URL's to equations and use them for accessing the images and the editor rather than the long URL's codecogs uses.

Also codecogs does not support many packages. It does not support the 'semantic' and 'maths-symbols' that I need in order to make this useful and I am sure others will want other packages.

https://www.ctan.org/tex-archive/macros/latex/contrib/semantic
https://www.ctan.org/pkg/maths-symbols

The following should come out as an inference rule :-
\inference{ \Gamma \vdash x_0 : T_0 \enspace \Gamma \vdash x_1 : T_1 \thinspace ... \thinspace \Gamma \vdash x_n : T_n \enspace \Gamma \vdash x_n : T_{n+1} \enspace }{ \Gamma \vdash {\bf match} \enspace x_0 : T_0 \enspace : \sqcap _{1\geq n \geq x+1} T_n }[MatchExpression]

and codecogs does not support \usepackage{}

### Using Jupyter Notebook
Another hack is utilizing the Jupyter Notebook.

GitHub has built-in support for rendering .ipynb files. You can write inline and display LaTeX code in the notebook and GitHub will render it for you.

For example, what I did is to edit the notebook and then simply export the finished notebook to here.

See example ntobook here: https://github.com/cookieisaac/RandomStuff/blob/master/MLU-Math01.ipynb

## Common Patterns

Type | Latex | Formula 
--|--|--

Dot Product | `$ A\cdot B $` | <img src="https://latex.codecogs.com/gif.latex?\inline&space;$&space;A\cdot&space;B&space;$" title="$ A\cdot B $" />

Hadamard Product | `$A \circ B$` | <img src="https://latex.codecogs.com/gif.latex?\inline&space;$&space;A\circ&space;B&space;$" title="$ A\circ B $" />

Matrx Transpose | `$ A^\top = \begin{pmatrix} 1 & 2 & 3 \\ -1 & 0 & 1 \\ 1 & 1 & 1 \end{pmatrix} $` | <img src="https://latex.codecogs.com/gif.latex?\inline&space;$&space;A^\top&space;=&space;\begin{pmatrix}&space;1&space;&&space;2&space;&&space;3&space;\\&space;-1&space;&&space;0&space;&&space;1&space;\\&space;1&space;&&space;1&space;&&space;1&space;\end{pmatrix}&space;$" title="$ A^\top = \begin{pmatrix} 1 & 2 & 3 \\ -1 & 0 & 1 \\ 1 & 1 & 1 \end{pmatrix} $" />

L2 Norm |`$ \|\vec x\|_2 = \sqrt{\sum_{i=1}^n x_i^2 }\text{ where }  \vec x = \begin {pmatrix} x_1 \\ x_2 \\ ... \\ x_n \end{pmatrix}$` | <img src="https://latex.codecogs.com/gif.latex?\inline&space;|\vec&space;x|_2&space;=&space;\sqrt{\sum_{i=1}^n&space;x_i^2&space;}\text{&space;where&space;}&space;\vec&space;x&space;=&space;\begin&space;{pmatrix}&space;x_1&space;\\&space;x_2&space;\\&space;...&space;\\&space;x_n&space;\end{pmatrix}" title="|\vec x|_2 = \sqrt{\sum_{i=1}^n x_i^2 }\text{ where } \vec x = \begin {pmatrix} x_1 \\ x_2 \\ ... \\ x_n \end{pmatrix}" /> 

L0 Norm | `$ \|\vec x\|_0 = \lim\limits_{p\to \infty} {\sum_{i=1}^n | x_i |^p } = \text{number of non-zero elements in } \vec x` | <img src="https://latex.codecogs.com/gif.latex?\inline&space;$&space;\|\vec&space;x\|_0&space;=&space;\lim\limits_{p\to&space;\infty}&space;{\sum_{i=1}^n&space;|&space;x_i&space;|^p&space;}&space;=&space;\text{number&space;of&space;non-zero&space;elements&space;in&space;}&space;\vec&space;x" title="$ \|\vec x\|_0 = \lim\limits_{p\to \infty} {\sum_{i=1}^n | x_i |^p } = \text{number of non-zero elements in } \vec x" />

Calculating vector angle | `$$\theta = \arccos \left(\frac{\vec v \cdot \vec w}{\|\vec v\| \|\vec w\|}\right)$$` | <img src="https://latex.codecogs.com/gif.latex?\inline&space;$$&space;\theta&space;=&space;\arccos&space;\left(\frac{\vec&space;v&space;\cdot&space;\vec&space;w}{\|\vec&space;v\|&space;\|\vec&space;w\|}\right)&space;$$" title="$$ \theta = \arccos \left(\frac{\vec v \cdot \vec w}{\|\vec v\| \|\vec w\|}\right) $$" /> 



