# Writing Latex in Github Readme

### Using External Website
A stop gap solution a site https://www.codecogs.com/latex/eqneditor.php that generates embedded links with TeX editor that then embeds a gif in GitHub :-

`https://www.codecogs.com/eqnedit.php?latex=\mathcal{W}(A,f)&space;=&space;(T,\bar{f})` renders

https://www.codecogs.com/eqnedit.php?latex=\mathcal{W}(A,f)&space;=&space;(T,\bar{f})

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

Here's a sample notebook file: https://gist.github.com/cyhsutw/d5983d166fb70ff651f027b2aa56ee4e




`$\|\vec x\|_2 = \sqrt{x_1^2+x_2^2}$`

$\|\vec x\|_2 = \sqrt{x_1^2+x_2^2}$
