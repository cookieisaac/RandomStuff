# Linear Algebra Operations

## Vector Inner Products

A row vector can be thought of as a vector of weights used to extract a feature

A column vector can be thought of as a data point

So a inner products between vectors <img src="https://latex.codecogs.com/gif.latex?\inline&space;\vec{w}^\top&space;\cdot&space;\vec{v}" title="\vec{w}^\top \cdot \vec{v}" /> can be thought as use weight <img src="https://latex.codecogs.com/gif.latex?\inline&space;\vec{w}" title="\vec{w}" /> to extract feature from datapoint <img src="https://latex.codecogs.com/gif.latex?\inline&space;\vec{v}" title="\vec{v}" />

What if we want to have multiple features extracted from one datapoint? Then we use a feature matrix where each **row** is a *feature* (a row of weights).

So a inner products between a matrix and a vector <img src="https://latex.codecogs.com/gif.latex?\inline&space;\begin{pmatrix}&space;w_1^\top&space;\\&space;w_2^\top&space;\\&space;...\\&space;w_n^\top&space;\end{pmatrix}\cdot\vec&space;v" title="\begin{pmatrix} w_1^\top \\ w_2^\top \\ ...\\ w_n^\top \end{pmatrix}\cdot\vec v" /> can be thought of as extract features w_1, w_2 ... w_n from datapoint  <img src="https://latex.codecogs.com/gif.latex?\inline&space;\vec{w}^\top&space;\cdot&space;\vec{v}" title="\vec{w}^\top \cdot \vec{v}" /> can be thought as use weight <img src="https://latex.codecogs.com/gif.latex?\inline&space;\vec{w}" title="\vec{w}" /> to extract feature from datapoint <img src="https://latex.codecogs.com/gif.latex?\inline&space;\vec{v}" title="\vec{v}" />

Then what if we want to extrac one feature from multiple datapoints? Then we use a matrix where each **column** is a *datapoint*.

So the inner products between a vector and a matrix <img src="https://latex.codecogs.com/gif.latex?\inline&space;\vec&space;w&space;\cdot&space;\begin{pmatrix}&space;\vec&space;v_1&space;&&space;\vec&space;v_2&space;&&space;...&space;&&space;\vec&space;v_m&space;\end{pmatrix}" title="\vec w \cdot \begin{pmatrix} \vec v_1 & \vec v_2 & ... & \vec v_m \end{pmatrix}" /> can be thought of as extract one feature <img src="https://latex.codecogs.com/gif.latex?\inline&space;\vec{w}^\top&space;\cdot&space;\vec{v}" title="\vec{w}^\top \cdot \vec{v}" /> can be thought as use weight <img src="https://latex.codecogs.com/gif.latex?\inline&space;\vec{w}" title="\vec{w}" /> from multiple datapoints v_1, ... v_m

### Geometric Interpretations

## Matrix Products

### Geometric Interpretations

## Matrix Inverse

## Singular Matrix

## Linear Dependence
