## MLU Math Overview

### Machine Learning Pipeline

Stage | Math in Context
--|--
Data | --
Data Representation | Vector/Matrix
Feature Extraction | Linear Algebra
Model Building | Probability
Optimization | Single/Multiple-variable(s) Calculus
Training | --

## Vector/Matrix

### Representation

A data point is usually represented as a **column** vector

A matrix is usually a collection of column vectors

### Norms

Norms is a measurement of distance in some of sort.

* L2-Norm: square root of squared sum <img src="https://latex.codecogs.com/gif.latex?\inline&space;$\|\vec&space;x\|_2&space;=&space;\sqrt{x_1^2&plus;x_2^2&plus;...&plus;x_n^2}$" title="$\|\vec x\|_2 = \sqrt{x_1^2+x_2^2+...+x_n^2}$" />
* Lp-Norm: p root of p sum of absolutes, generalization of L2 <img src="https://latex.codecogs.com/gif.latex?\inline&space;$\|\vec&space;x\|_p&space;=&space;({|x_1|^p&plus;|x_2|^p&plus;...&plus;|x_n|^p})^{1/p}$" title="$\|\vec x\|_p = ({|x_1|^p+|x_2|^p+...+|x_n|^p})^{1/p}$" />
* L1-Norm: sum of all absolute value of elements 
* Linfinity-Norm: the largest absolute value of element 
* L0-Norm: number of non-zero element, not a real norm, more of a measure of sparsity 

For Lp-Norm: Lp(v) <= Lq(v) whenever p > q

