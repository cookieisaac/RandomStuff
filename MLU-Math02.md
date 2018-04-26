# Linear Algebra Operations

## Inner Products is Feature Extraction

* A **row vector** <img src="https://latex.codecogs.com/gif.latex?\inline&space;\vec&space;w^\top" title="\vec w^\top" /> can be thought of as a feature (more precisely, a vector of weights used to extract a feature)

* A **column vector** <img src="https://latex.codecogs.com/gif.latex?\inline&space;\vec&space;v" title="\vec v" /> can be thought of as a data point

* The inner products between vectors <img src="https://latex.codecogs.com/gif.latex?\inline&space;\vec{w}^\top&space;\cdot&space;\vec{v}" title="\vec{w}^\top \cdot \vec{v}" /> can be thought as use weight <img src="https://latex.codecogs.com/gif.latex?\inline&space;\vec{w}" title="\vec{w}" /> to extract feature from datapoint <img src="https://latex.codecogs.com/gif.latex?\inline&space;\vec{v}" title="\vec{v}" />

What if we want to have multiple features extracted from one datapoint? Then we use a feature matrix where each **row** is a *feature* (a row of weights to extract a feature).

* The inner products between a matrix and a vector <img src="https://latex.codecogs.com/gif.latex?\inline&space;\begin{pmatrix}&space;w_1^\top&space;\\&space;w_2^\top&space;\\&space;...\\&space;w_n^\top&space;\end{pmatrix}\cdot\vec&space;v" title="\begin{pmatrix} w_1^\top \\ w_2^\top \\ ...\\ w_n^\top \end{pmatrix}\cdot\vec v" /> can be thought of as extract features <img src="https://latex.codecogs.com/gif.latex?\inline&space;\vec&space;w_1&space;,&space;\vec&space;w_2&space;,&space;...&space;,&space;\vec&space;w_n" title="\vec w_1 , \vec w_2 , ... , \vec w_n" /> from datapoint  <img src="https://latex.codecogs.com/gif.latex?\inline&space;\vec{w}^\top&space;\cdot&space;\vec{v}" title="\vec{w}^\top \cdot \vec{v}" /> can be thought as use weight <img src="https://latex.codecogs.com/gif.latex?\inline&space;\vec{w}" title="\vec{w}" /> to extract feature from datapoint <img src="https://latex.codecogs.com/gif.latex?\inline&space;\vec{v}" title="\vec{v}" />

What if we want to extrac one feature from multiple datapoints? Then we use a matrix where each **column** is a *datapoint*.

* The inner products between a vector and a matrix <img src="https://latex.codecogs.com/gif.latex?\inline&space;\vec&space;w&space;\cdot&space;\begin{pmatrix}&space;\vec&space;v_1&space;&&space;\vec&space;v_2&space;&&space;...&space;&&space;\vec&space;v_m&space;\end{pmatrix}" title="\vec w \cdot \begin{pmatrix} \vec v_1 & \vec v_2 & ... & \vec v_m \end{pmatrix}" /> can be thought of as extract one feature <img src="https://latex.codecogs.com/gif.latex?\inline&space;\vec{w}" title="\vec{w}" /> from multiple datapoints <img src="https://latex.codecogs.com/gif.latex?\inline&space;\vec&space;v_1&space;,&space;\vec&space;v_2&space;,&space;...&space;,&space;\vec&space;v_m" title="\vec v_1 , \vec v_2 , ... , \vec v_m" />

Therefore, to extract multiple features from multiple datapoints, we will have matrix multiplication

* The products between two matrices can be thought of as extracting multiple features from multiple datapoints

<img src="https://latex.codecogs.com/gif.latex?$&space;W^\top&space;V=&space;\begin{pmatrix}&space;1&space;&&space;2&space;&&space;3&space;&&space;4\\&space;-1&space;&&space;0&space;&&space;1&space;&&space;0\\&space;1&space;&&space;1&space;&&space;1&space;&&space;1\end{pmatrix}&space;\begin{pmatrix}&space;1&space;&&space;2&space;\\&space;3&space;&&space;9&space;\\&space;5&space;&&space;7\\4&space;&&space;3\end{pmatrix}&space;$&space;\text{&space;is&space;extracting&space;feature&space;}&space;\vec&space;w_1^\top&space;=&space;\begin{pmatrix}&space;1&space;&&space;2&space;&&space;3&space;&&space;4&space;\end{pmatrix},&space;\vec&space;w_2^\top&space;=&space;\begin{pmatrix}&space;-1&space;&&space;0&space;&&space;1&space;&&space;0&space;\end{pmatrix}&space;\text{and&space;}&space;\vec&space;w_3^\top&space;=&space;\begin{pmatrix}&space;1&space;&&space;2&space;&&space;3&space;&&space;4&space;\end{pmatrix}&space;\text{from&space;data&space;point&space;}&space;\vec&space;v_1&space;=&space;\begin{pmatrix}&space;1&space;\\&space;3&space;\\&space;5&space;\\4&space;\end{pmatrix}&space;\text{&space;and&space;}\vec&space;v_2&space;=&space;\begin{pmatrix}&space;2&space;\\&space;9&space;\\&space;7\\3\end{pmatrix}" title="$ W^\top V= \begin{pmatrix} 1 & 2 & 3 & 4\\ -1 & 0 & 1 & 0\\ 1 & 1 & 1 & 1\end{pmatrix} \begin{pmatrix} 1 & 2 \\ 3 & 9 \\ 5 & 7\\4 & 3\end{pmatrix} $ \text{ is extracting feature } \vec w_1^\top = \begin{pmatrix} 1 & 2 & 3 & 4 \end{pmatrix}, \vec w_2^\top = \begin{pmatrix} -1 & 0 & 1 & 0 \end{pmatrix} \text{and } \vec w_3^\top = \begin{pmatrix} 1 & 2 & 3 & 4 \end{pmatrix} \text{from data point } \vec v_1 = \begin{pmatrix} 1 \\ 3 \\ 5 \\4 \end{pmatrix} \text{ and }\vec v_2 = \begin{pmatrix} 2 \\ 9 \\ 7\\3\end{pmatrix}" />

## Matrix Multiplication and Decomposition

Any 2 * 2 matrix can be thought of as a stretching, followed by a skewing then by a rotation 
https://math.stackexchange.com/a/2221494

With larger matrices, https://math.stackexchange.com/a/710888 One major theme in the study of matrix algebra is that of matrix decompositions. The idea is to take a matrix A (either arbitrary or satisfying some reasonable conditions) and decompose it as the product of two or three matrices of a simpler form. For example, the so-called QR decomposition writes an arbitrary matrix A as A=QR Where Q is orthogonal (a composition of rotations + reflections) and R is upper-triangular. In two-dimensions, Q is either rotation or reflection.

In the subject of SVD, an important matrix decomposition is the aptly-named singular value decomposition. This writes an arbitrary matrix A in the form A=UDV^H where D is a nonnegative, diagonal matrix whose entries are called the singular values, U and V are orthogonal (unitary in the complex case), and VH is the transpose of V (or conjugate-transpose if complex entries are allowed). A diagonal matrix can be thought of as stretching a basis by the corresponding singular values, and an orthogonal matrix is a rotation or reflection. Thus, this decomposition sees A as a composition of a sort of rotation (transposed), a stretching, and finally another rotation.

## Matrix Inverse

## Singular Matrix

## Linear Dependence
