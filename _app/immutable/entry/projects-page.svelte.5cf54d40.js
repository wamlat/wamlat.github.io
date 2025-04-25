var dr=Object.defineProperty;var mr=(s,t,n)=>t in s?dr(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n;var Ye=(s,t,n)=>(mr(s,typeof t!="symbol"?t+"":t,n),n);import{S as Pe,i as Le,s as Me,X as Ce,y as me,z as fe,A as _e,Y as fr,Z as _r,g as se,d as oe,B as be,_ as Xe,P as br,Q as vr,R as kr,T as wr,k as x,l as j,m as z,h as _,n as w,b as G,F as et,q as J,a as B,r as Y,c as N,O as ze,H as ge,C as k,u as Te,$ as vt,e as tt,K as nt,D as it,f as yr,L as $r,G as xr,o as jr,E as Sr,v as zr,a0 as Tr}from"../chunks/index.21b45e26.js";import{p as Or}from"../chunks/stores.0b22645d.js";import{I as Rr}from"../chunks/Icon.f1f5d5f1.js";import{S as Ir}from"../chunks/Seo.62f9a220.js";function Pr(s){let t;const n=s[2].default,e=br(n,s,s[3],null);return{c(){e&&e.c()},l(i){e&&e.l(i)},m(i,a){e&&e.m(i,a),t=!0},p(i,a){e&&e.p&&(!t||a&8)&&vr(e,n,i,i[3],t?wr(n,i[3],a,null):kr(i[3]),null)},i(i){t||(se(e,i),t=!0)},o(i){oe(e,i),t=!1},d(i){e&&e.d(i)}}}function Lr(s){let t,n;const e=[{name:"calendar-days"},s[1],{iconNode:s[0]}];let i={$$slots:{default:[Pr]},$$scope:{ctx:s}};for(let a=0;a<e.length;a+=1)i=Ce(i,e[a]);return t=new Rr({props:i}),{c(){me(t.$$.fragment)},l(a){fe(t.$$.fragment,a)},m(a,r){_e(t,a,r),n=!0},p(a,[r]){const o=r&3?fr(e,[e[0],r&2&&_r(a[1]),r&1&&{iconNode:a[0]}]):{};r&8&&(o.$$scope={dirty:r,ctx:a}),t.$set(o)},i(a){n||(se(t.$$.fragment,a),n=!0)},o(a){oe(t.$$.fragment,a),n=!1},d(a){be(t,a)}}}function Mr(s,t,n){let{$$slots:e={},$$scope:i}=t;const a=[["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}],["line",{x1:"16",y1:"2",x2:"16",y2:"6"}],["line",{x1:"8",y1:"2",x2:"8",y2:"6"}],["line",{x1:"3",y1:"10",x2:"21",y2:"10"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]];return s.$$set=r=>{n(1,t=Ce(Ce({},t),Xe(r))),"$$scope"in r&&n(3,i=r.$$scope)},t=Xe(t),[a,t,e,i]}class Dr extends Pe{constructor(t){super(),Le(this,t,Mr,Lr,Me,{})}}const Ar=Dr;var kt="Bore – Localhost Tunnels",wt=new Date(16492032e5),yt="ekzhang/bore",$t=["Rust","Systems","CLI"],xt="A modern, simple TCP tunnel in 400 lines of Rust.",jt="bore.png",St=`\`bore\` is a minimal CLI tool that exposes local ports to a remote server,
bypassing standard NAT connection firewalls. That's all it does: no more, and no
less.

With a single binary, you can expose any number of local TCP ports to the public
internet at a specified remote server address. There is a public instance of the
tunneling server running at \`bore.pub\`, available for anyone to use, similar to
[ngrok](https://ngrok.com/) or
[localtunnel](https://github.com/localtunnel/localtunnel). It's also very easy
to host your own server with a single \`bore server\` command in the same binary
executable, with optional authentication.

**Links: [GitHub](https://github.com/ekzhang/bore),
[Crates.io](https://crates.io/crates/bore-cli),
[Documentation](https://docs.rs/bore-cli)**`;const Cr={title:kt,date:wt,repo:yt,topics:$t,lead:xt,image:jt,content:St},Er=Object.freeze(Object.defineProperty({__proto__:null,content:St,date:wt,default:Cr,image:jt,lead:xt,repo:yt,title:kt,topics:$t},Symbol.toStringTag,{value:"Module"}));var zt="Char-RNN Keras",Tt=new Date(15402528e5),Ot="ekzhang/char-rnn-keras",Rt=["Python","Machine Learning","Music"],It="Character-level language models with recurrent neural networks in Keras.",Pt="char-rnn-keras.png",Lt=`Inspired by Andrej Karpathy's
[blog post](https://karpathy.github.io/2015/05/21/rnn-effectiveness/), this is
an implementation of a multi-layer long short-term memory (LSTM) network in
Keras, for learning and sampling from character-level patterns in text. This was
trained to generate writing in the style of historical authors, like
Shakespeare, Hugo, and Carroll.

A really interesting application was training this model on a text-based corpus
of folk music, from which it could compose fairly convincing new music samples.
See the <code>music-gen</code> demo below.

**Links: [GitHub](https://github.com/ekzhang/char-rnn-keras),
[Demo](https://ekzhang.github.io/music-gen/)**`;const qr={title:zt,date:Tt,repo:Ot,topics:Rt,lead:It,image:Pt,content:Lt},Gr=Object.freeze(Object.defineProperty({__proto__:null,content:Lt,date:Tt,default:qr,image:Pt,lead:It,repo:Ot,title:zt,topics:Rt},Symbol.toStringTag,{value:"Module"}));var Mt="classes.wtf",Dt=new Date(16600896e5),At="ekzhang/classes.wtf",Ct=["Go","TypeScript","Svelte","Systems"],Et="A course catalog with extremely fast full-text search.",qt="classes-wtf.png",Gt=`Harvard has many course search websites, but none of them are good. This project
is an attempt to take the problem more seriously: write high-performance
software and set great defaults so that people can get better, more useful
suggestions, 100x faster.

Classes.wtf is a custom, distributed course search engine that focuses on speed
and quality of results. The goal is for the entire {request, computation,
response, and render} pipeline to take under 30 milliseconds. I built it in a
weekend out of personal annoyance and launched a week later; it's now pretty
popular among students at my school.

**Links: [GitHub](https://github.com/ekzhang/classes.wtf),
[Website](https://classes.wtf)**`;const Ur={title:Mt,date:Dt,repo:At,topics:Ct,lead:Et,image:qt,content:Gt},Hr=Object.freeze(Object.defineProperty({__proto__:null,content:Gt,date:Dt,default:Ur,image:qt,lead:Et,repo:At,title:Mt,topics:Ct},Symbol.toStringTag,{value:"Module"}));var Ut="Composing Studio",Ht=new Date(16322688e5),Wt="ekzhang/composing.studio",Bt=["TypeScript","Rust","Music","React"],Nt="Collaborative music composition for everyone.",Ft="composing-studio.png",Zt=`_Composing Studio_ is a free and easy-to-use online music notation editor that
lets anyone collaborate in real time on short musical pieces. To use it, just go
to [composing.studio](https://composing.studio/) in your browser, create a new
session, and share the link with other musicians! There's no setup or
installation required. You'll be able to typeset musical notation while seeing
each other's work in real time (just like Google Docs), with instant sheet music
rendering and live audio playback.

This project originated at [HackMIT 2021](https://hackmit.org/) (we won a grand
prize), where I pitched the idea and formed a team of four programmer-musicians.
Although we hadn't previously known each other, we all shared the same goal of
exploring collaborative music with the global community.

**Links: [GitHub](https://github.com/ekzhang/composing.studio),
[Website](https://composing.studio/)**`;const Wr={title:Ut,date:Ht,repo:Wt,topics:Bt,lead:Nt,image:Ft,content:Zt},Br=Object.freeze(Object.defineProperty({__proto__:null,content:Zt,date:Ht,default:Wr,image:Ft,lead:Nt,repo:Wt,title:Ut,topics:Bt},Symbol.toStringTag,{value:"Module"}));var Vt="Crepe – Logic Programming in Rust",Qt=new Date(16008192e5),Kt="ekzhang/crepe",Jt=["Rust","Programming Languages","Datalog"],Yt="Fast, compiled Datalog for static analysis, with Rust integration.",Xt="crepe.png",en=`_Crepe_ is a library that allows you to write declarative logic programs in
Rust, with a [Datalog](https://en.wikipedia.org/wiki/Datalog)-like syntax. It
provides a procedural macro that generates efficient, safe code and
interoperates seamlessly with Rust programs.

Inspired by the power of [Souffle](https://souffle-lang.github.io/) and
[Formulog](https://github.com/HarvardPL/formulog), this project is unique in
enabling safe integration of arbitrary functions from the host language (Rust)
within compiled Horn clauses. It also includes many features of modern Datalog
implementations: stratified negation, semi-naive evaluation, and automatic index
generation.

**Links: [GitHub](https://github.com/ekzhang/crepe),
[Crates.io](https://crates.io/crates/crepe),
[Documentation](https://docs.rs/crepe)**`;const Nr={title:Vt,date:Qt,repo:Kt,topics:Jt,lead:Yt,image:Xt,content:en},Fr=Object.freeze(Object.defineProperty({__proto__:null,content:en,date:Qt,default:Nr,image:Xt,lead:Yt,repo:Kt,title:Vt,topics:Jt},Symbol.toStringTag,{value:"Module"}));var tn="Dispict",nn=new Date(16691616e5),an="ekzhang/dispict",rn=["Python","Svelte","Art","Vision"],sn="Creative aesthetics tool to discover art museums.",on="dispict.jpg",ln=!0,cn=`Design a growing artistic exhibit of your own making, with semantic search
powered by OpenAI CLIP. Bring your own labels and context.

Creativity and curiosity require associative thinking. What if computers could
connect us with masterpieces made by artists of the past? Dispict is a new way
to experience the Harvard Art Museums' online collection (containing over
200,000 digitized works) through language-image machine learning models, helping
you curate your own personalized galleries.

**Links: [GitHub](https://github.com/ekzhang/dispict),
[Website](https://dispict.com)**`;const Zr={title:tn,date:nn,repo:an,topics:rn,lead:sn,image:on,image_border:ln,content:cn},Vr=Object.freeze(Object.defineProperty({__proto__:null,content:cn,date:nn,default:Zr,image:on,image_border:ln,lead:sn,repo:an,title:tn,topics:rn},Symbol.toStringTag,{value:"Module"}));var pn="Fast Semantic Segmentation",un=new Date(15981408e5),hn="ekzhang/fastseg",gn=["Python","Machine Learning","Vision"],dn="State-of-the-art, real-time semantic segmentation with MobileNetV3.",mn="fastseg.jpg",fn=`While working at Nvidia, I open sourced PyTorch code and pretrained weights for
real-time semantic segmentation of street images. The goal was to make it easy
for anyone to use cutting-edge machine learning algorithms for semantic
segmentation tasks, especially in embedded applications.

This was a time-consuming effort aided by researchers from
[ADLR](https://nv-adlr.github.io/). Although
[the MobileNetV3 paper](https://arxiv.org/abs/1905.02244v5) reported 72.6% mIoU
accuracy, previous public implementations only scored around 40-55% mIoU. After
many adjustments to model architecture, loss functions
([RMI](https://arxiv.org/abs/1910.12037)), and hyperparameters, I was able to
train models reaching 72.3% mIoU, while running inference at up to 37.3 FPS on a
modern GPU.

I currently maintain this code as a
<a href="https://pypi.org/project/fastseg/">package on PyPI</a>, along with
scripts for inference and exporting models to different formats for deployment.

**Links: [GitHub](https://github.com/ekzhang/fastseg),
[Colab](https://colab.research.google.com/github/ekzhang/fastseg/blob/master/demo/fastseg-semantic-segmentation.ipynb)**`;const Qr={title:pn,date:un,repo:hn,topics:gn,lead:dn,image:mn,content:fn},Kr=Object.freeze(Object.defineProperty({__proto__:null,content:fn,date:un,default:Qr,image:mn,lead:dn,repo:hn,title:pn,topics:gn},Symbol.toStringTag,{value:"Module"}));var _n="Canvas Hashlife",bn=new Date(15455232e5),vn="ekzhang/game-of-life",kn=["JavaScript","Algorithms","Graphics","Vue"],wn="An ultra-fast simulation of Conway's Game of Life in the browser.",yn="game-of-life.png",$n=`Ever wanted to simulate a 2<sup>100</sup> &times; 2<sup>100</sup> grid of cells
over 2<sup>50</sup> generations? Well, now you can do that in just milliseconds
without any specialized software, right in your browser!

How is it possible to simulate such a massive pattern without running out of CPU
or memory? The secret is Bill Gosper's
[Hashlife](https://en.wikipedia.org/wiki/Hashlife) algorithm, which combines
quadtrees and memoization to
[compress space and time](https://www.drdobbs.com/jvm/an-algorithm-for-compressing-space-and-t/184406478).
In the image, you can see a frontend web application computing the
498,913,509,376<sup>th</sup> generation of a Turing machine pattern in just
under a millisecond.

**Links: [GitHub](https://github.com/ekzhang/game-of-life),
[Website](https://ekzhang.github.io/game-of-life/)**`;const Jr={title:_n,date:bn,repo:vn,topics:kn,lead:wn,image:yn,content:$n},Yr=Object.freeze(Object.defineProperty({__proto__:null,content:$n,date:bn,default:Jr,image:yn,lead:wn,repo:vn,title:_n,topics:kn},Symbol.toStringTag,{value:"Module"}));var xn="Graphics Workshop",jn=new Date(1619136e6),Sn="ekzhang/graphics-workshop",zn=["OpenGL","Graphics","Shaders"],Tn="Learn computer graphics by writing GPU shaders!",On="graphics-workshop.png",Rn=`This workshop contains a selection of self-guided projects designed to teach the
basics of computer graphics. Each project introduces an important graphics
technique that is extensively used in real-world applications. The code is
designed to run in real time on modern GPUs, without requiring any extra
software. I wrote this when frustrated with the lack of proper documentation and
simple code examples for GPU shaders.

The topics include fragment shaders
([GLSL](https://en.wikipedia.org/wiki/OpenGL_Shading_Language)), procedural
texture generation, rasterization, lighting calculations, and real-time ray
tracing. I hosted a live version of this workshop at Harvard, and it has been
used by thousands of self-learners after gaining popularity in the
[/r/gamedev](https://www.reddit.com/r/gamedev/) community.

**Links: [GitHub](https://github.com/ekzhang/graphics-workshop),
[Deployment](https://www.ekzhang.com/graphics-workshop/)**`;const Xr={title:xn,date:jn,repo:Sn,topics:zn,lead:Tn,image:On,content:Rn},es=Object.freeze(Object.defineProperty({__proto__:null,content:Rn,date:jn,default:Xr,image:On,lead:Tn,repo:Sn,title:xn,topics:zn},Symbol.toStringTag,{value:"Module"}));var In="Universal Gravity Simulator",Pn=new Date(14639616e5),Ln="ekzhang/gravity",Mn=["JavaScript","Graphics","Physics"],Dn="Control hundreds of tiny planets with gravity.",An="gravity.png",Cn=`This was one of my first fun programming projects, a visual experiment
simulating gravity in a system with hundreds of interacting objects.
Calculations are done using simple physics formulas, with a bit of damping to
make them more robust. The user can click to add an invisible mass that attracts
all objects to the cursor. Everything is rendered in real time on a \`<canvas>\`
element, and it's quite satisfying to move the colorful balls around!

**Links: [GitHub](https://github.com/ekzhang/gravity),
[Website](https://ekzhang.github.io/gravity/)**`;const ts={title:In,date:Pn,repo:Ln,topics:Mn,lead:Dn,image:An,content:Cn},ns=Object.freeze(Object.defineProperty({__proto__:null,content:Cn,date:Pn,default:ts,image:An,lead:Dn,repo:Ln,title:In,topics:Mn},Symbol.toStringTag,{value:"Module"}));var En="Procedural Harmony",qn=new Date(155088e7),Gn="ekzhang/harmony",Un=["Python","Music","Algorithms","Flask"],Hn="Dynamic programming applied to four-part harmony.",Wn="harmony.png",Bn=!0,Nn=`This is a Python program that takes as input a string containing
[keys](https://en.wikipedia.org/wiki/Key_signature) and
[roman numerals](https://en.wikipedia.org/wiki/Roman_numeral_analysis)
representing a chord progression, and voices the resulting chords according to
common practice [voice leading](https://en.wikipedia.org/wiki/Voice_leading)
conventions. This can be used to try out chord progressions, compose a short
chorale, and solve music theory exercises.

Parsing and interpreting the roman numerals was done with
[Music21](https://web.mit.edu/music21/). This project required satisfying a
technical set of
[voice leading constraints](http://derekremes.com/wp-content/uploads/voiceleadingsummary.pdf),
which I framed as a combinatorial optimization problem. Although the set of
possible voicings is exponential in size, you can use dynamic programming on
intermediate states for a relatively fast algorithm. See the website below for
an interactive version deployed with Flask.

The code and idea behind this project were used as the basis for an
[abstract at ISMIR 2020](https://program.ismir2020.net/lbd_432.html), written by
computational music theory researchers at McGill University.

**Links: [GitHub](https://github.com/ekzhang/harmony),
[Website](https://autoharmony.herokuapp.com/)**`;const is={title:En,date:qn,repo:Gn,topics:Un,lead:Hn,image:Wn,image_border:Bn,content:Nn},as=Object.freeze(Object.defineProperty({__proto__:null,content:Nn,date:qn,default:is,image:Wn,image_border:Bn,lead:Hn,repo:Gn,title:En,topics:Un},Symbol.toStringTag,{value:"Module"}));var Fn="Inline SQL",Zn=new Date(16651872e5),Vn="ekzhang/inline-sql",Qn=["Python","Programming Languages","Databases"],Kn="Weaving relational queries into the fabric of Python.",Jn="inline-sql.png",Yn=`The \`inline-sql\` library provides a simple embedded language for writing SQL in
Python programs. Operations run directly within the calling process, and they
execute on Pandas dataframes. Local variables are automatically interpolated as
parameters.

This is implemented as a small wrapper around
[DuckDB](https://github.com/duckdb/duckdb), so it is
[extremely fast](https://duckdb.org/2021/05/14/sql-on-pandas.html). From my own
experimental perspective, the intent of the project was to see whether we can
usefully and ergonomically embed declarative, relational query languages within
general-purpose media.

**Links: [GitHub](https://github.com/ekzhang/inline-sql),
[PyPI](https://pypi.org/project/inline-sql/)**`;const rs={title:Fn,date:Zn,repo:Vn,topics:Qn,lead:Kn,image:Jn,content:Yn},ss=Object.freeze(Object.defineProperty({__proto__:null,content:Yn,date:Zn,default:rs,image:Jn,lead:Kn,repo:Vn,title:Fn,topics:Qn},Symbol.toStringTag,{value:"Module"}));var Xn="Julia Fractal Renderers",ei=new Date(15244416e5),ti="ekzhang/julia-fractal",ni=["C++","Java","Graphics","TypeScript","OpenGL"],ii="Fast, interactive fractal renderers in C++, Java, and WebGL.",ai="julia-1.jpg",ri=["julia-2.jpg","julia-3.jpg","julia-4.jpg"],si=`Originally, this project started out as a multithreaded Julia fractal renderer
in C++, which I used to create high-quality static images and animations.
However, I also wanted to interactively explore the fractals by zooming and
panning, so I created a Java Swing app with similar multithreaded performance.

The speed of these implementations was heavily CPU-bound though, so I finally
implemented an
[OpenGL shader](https://en.wikipedia.org/wiki/OpenGL_Shading_Language) that
could render Julia fractals with blazing-fast speed, fast enough to be explored
interactively with almost no lag. I rendered using WebGL and connected it to
mobile-friendly controls with TypeScript. You can play with this fractal
explorer in the website linked below.

**Links: [GitHub](https://github.com/ekzhang/julia-fractal),
[GitHub (Java)](https://github.com/ekzhang/julia-viewer),
[GitHub (WebGL)](https://github.com/ekzhang/webgl-julia-viewer),
[Website](https://ekzhang.github.io/webgl-julia-viewer/)**`;const os={title:Xn,date:ei,repo:ti,topics:ni,lead:ii,image:ai,subimages:ri,content:si},ls=Object.freeze(Object.defineProperty({__proto__:null,content:si,date:ei,default:os,image:ai,lead:ii,repo:ti,subimages:ri,title:Xn,topics:ni},Symbol.toStringTag,{value:"Module"}));var oi="Langevin Dynamics for Composition",li=new Date(16060896e5),ci="ekzhang/langevin-music",pi=["Python","Machine Learning","Music","Transformers"],ui="Generative modeling of Bach chorales by gradient estimation.",hi="langevin-music.png",gi=`This research project introduces a new generative model for music composition,
based on annealed Langevin dynamics and a noise-conditional score matching
algorithm using transformers. Unlike implicit models such as GANs, this learns
an explicit distribution of the input data.

We study if Langevin dynamics and score matching can combine the controllability
of Markov chain Monte Carlo (MCMC) methods with the global view and fast
convergence of stochastic gradient descent, to produce high-quality, structured
musical compositions.

Our contribution is to look in the direction of designing generative deep
learning models for music that strongly _avoid local minima_, while _retaining
controllability_.

**Links: [GitHub](https://github.com/ekzhang/langevin-music),
[Paper](https://www.ekzhang.com/assets/pdf/Generative_Music_Modeling.pdf)**`;const cs={title:oi,date:li,repo:ci,topics:pi,lead:ui,image:hi,content:gi},ps=Object.freeze(Object.defineProperty({__proto__:null,content:gi,date:li,default:cs,image:hi,lead:ui,repo:ci,title:oi,topics:pi},Symbol.toStringTag,{value:"Module"}));var di="Algorithm and Data Structure Library",mi=new Date(15482016e5),fi="ekzhang/library",_i=["C++","CP","Algorithms","Angular"],bi="A competitive programmer's library of algorithms and data structures in C++.",vi="library.png",ki=`I maintain an open-source library of about thirty-five C++ templates for
algorithms and data structures. These are fairly advanced tricks targeted toward
top competitive programmers, including fast implementations of FFT, Aho-Corasick
string search, and Dinic's blocking flow algorithm, as well as data structures
like link-cut trees and centroid decomposition.

This is accessible on a static website, which I developed using Angular. The
website also includes a searchable collection of more than 600 code samples from
other open-source libraries.

**Links: [GitHub](https://github.com/ekzhang/library),
[Website](https://ekzlib.netlify.app/)**`;const us={title:di,date:mi,repo:fi,topics:_i,lead:bi,image:vi,content:ki},hs=Object.freeze(Object.defineProperty({__proto__:null,content:ki,date:mi,default:us,image:vi,lead:bi,repo:fi,title:di,topics:_i},Symbol.toStringTag,{value:"Module"}));var wi="Percival",yi=new Date(16382304e5),$i="ekzhang/percival",xi=["Rust","Svelte","Datalog","Visualization"],ji="Web-based, reactive Datalog notebooks.",Si="percival.png",zi=!0,Ti=`[Percival](https://percival.ink/) is a **declarative data query and
visualization language**. It provides a reactive, web-based notebook environment
for exploring complex datasets, producing interactive graphics, and sharing
results.

Percival combines the flexibility of
[_Datalog_](https://en.wikipedia.org/wiki/Datalog) as a query language for
relational data with the beauty of
[_exploratory visualization grammars_](https://observablehq.com/@observablehq/plot).
These declarative components interact through a reactive dataflow system.
Because Percival uses web technologies (including Web Workers for multithreaded,
sandboxed execution), fully-interactive notebooks can be shared with anyone on
the Internet, making data analyses more tangible to others.

**Links: [GitHub](https://github.com/ekzhang/percival),
[Website](https://percival.ink/)**`;const gs={title:wi,date:yi,repo:$i,topics:xi,lead:ji,image:Si,image_border:zi,content:Ti},ds=Object.freeze(Object.defineProperty({__proto__:null,content:Ti,date:yi,default:gs,image:Si,image_border:zi,lead:ji,repo:$i,title:wi,topics:xi},Symbol.toStringTag,{value:"Module"}));var Oi="Strange Attractor – Poincaré Map",Ri=new Date(17455392e5),Ii="",Pi=["Python","Chaos Theory","Math"],Li="A visualization of chaos using the Rössler attractor's Poincaré section.",Mi="poincare-map.png",Di="https://wamlat.github.io/poincare-map",Ai=`This project visualizes the chaotic behavior of the Rössler attractor using a
**Poincaré section** at \\( z = 0 \\).  
Each time the system's trajectory crosses the plane, we plot a point—revealing
the hidden fractal geometry.

**Links:** [Website](https://wamlat.github.io/poincare-map)

<details>
<summary>View Python Code</summary>

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import solve_ivp

a, b, c = 0.2, 0.2, 5.7

def rossler(t, state):
    x, y, z = state
    dx = -y - z
    dy = x + a * y
    dz = b + z * (x - c)
    return [dx, dy, dz]

y0 = [1.0, 1.0, 1.0]
t_span = (0, 500)
t_eval = np.linspace(*t_span, 100000)

sol = solve_ivp(rossler, t_span, y0, t_eval=t_eval, rtol=1e-9)
x, y, z = sol.y

poincare_x, poincare_y = [], []
for i in range(1, len(z)):
    if z[i-1] < 0 and z[i] >= 0:
        alpha = -z[i-1] / (z[i] - z[i-1])
        px = x[i-1] + alpha * (x[i] - x[i-1])
        py = y[i-1] + alpha * (y[i] - y[i-1])
        poincare_x.append(px)
        poincare_y.append(py)

plt.figure(figsize=(8, 6))
plt.scatter(poincare_x, poincare_y, s=0.5)
plt.title("Poincaré Map of Rössler Attractor (z=0)")
plt.xlabel("x")
plt.ylabel("y")
plt.grid(True)
plt.savefig("poincare-map.png", dpi=300)
plt.show()
\`\`\`

</details>`;const ms={title:Oi,date:Ri,repo:Ii,topics:Pi,lead:Li,image:Mi,website:Di,content:Ai},fs=Object.freeze(Object.defineProperty({__proto__:null,content:Ai,date:Ri,default:ms,image:Mi,lead:Li,repo:Ii,title:Oi,topics:Pi,website:Di},Symbol.toStringTag,{value:"Module"}));var Ci="Redis Rope",Ei=new Date(16591392e5),qi="ekzhang/redis-rope",Gi=["Zig","Rust","Systems","Algorithms"],Ui="Fast native data type for manipulating large strings in Redis.",Hi="redis-rope.svg",Wi=`\`redis-rope\` is a fast and versatile
[rope](<https://en.wikipedia.org/wiki/Rope_(data_structure)>) data type for
large strings in [Redis](https://redis.io), distributed as a native
[module](https://redis.io/docs/reference/modules/). It's primarily written in
Zig and tested with Rust.

The ropes in this module are backed by
[splay trees](https://en.wikipedia.org/wiki/Splay_tree), which are a
self-adjusting data structure that has logarithmic amortized worst-case
performance, while recently-accessed indices are also quick to access in
subsequent operations. Each splay tree node stores between 64 and 127 bytes of
data.

More than just being theoretically interesting, this module also tries to be
somewhat _practical_ by caring about safety, correctness, and speed. It
approaches the performance of ordinary strings for simple operations and is
hundreds of times faster for complex operations.

**Links: [GitHub](https://github.com/ekzhang/redis-rope),
[Releases](https://github.com/ekzhang/redis-rope/releases)**`;const _s={title:Ci,date:Ei,repo:qi,topics:Gi,lead:Ui,image:Hi,content:Wi},bs=Object.freeze(Object.defineProperty({__proto__:null,content:Wi,date:Ei,default:_s,image:Hi,lead:Ui,repo:qi,title:Ci,topics:Gi},Symbol.toStringTag,{value:"Module"}));var Bi="Path Tracer",Ni=new Date(16086816e5),Fi="ekzhang/rpt",Zi=["Rust","Graphics","Rendering"],Vi="A physically-based path tracer in Rust.",Qi="rpt.jpg",Ki=`This a physically based, CPU-only rendering engine written in Rust. It
implements a Monte Carlo path tracing algorithm for global illumination. There's
a lot of features, including k-d tree mesh acceleration, physical material
properties (microfacet BSDF with multiple importance sampling), HDRI environment
maps, OBJ/MTL/STL files, depth of field, and particle physics simulation.

It's also parallelized with [rayon](https://github.com/rayon-rs/rayon) and
available as a library on [crates.io](https://crates.io/). The entire source
code, including code for the example images and more, is very short (~3K SLOC).
We're still looking to extend it with bidirectional path tracing and other
features.

This won top project out of 100 students in MIT's computer graphics class
(6.837, Fall 2020).

**Links: [GitHub](https://github.com/ekzhang/rpt),
[Crates.io](https://crates.io/crates/rpt),
[Documentation](https://docs.rs/rpt)**`;const vs={title:Bi,date:Ni,repo:Fi,topics:Zi,lead:Vi,image:Qi,content:Ki},ks=Object.freeze(Object.defineProperty({__proto__:null,content:Ki,date:Ni,default:vs,image:Qi,lead:Vi,repo:Fi,title:Bi,topics:Zi},Symbol.toStringTag,{value:"Module"}));var Ji="Rushlight",Yi=new Date(16877376e5),Xi="ekzhang/rushlight",ea=["TypeScript","Systems","Redis"],ta="Collaborative code editors that run on your own infrastructure.",na="rushlight.jpg",ia=`Rushlight is my take on the _essence_ of a persistent, collaborative text editor
based on operational transformation, as a library you would embed in a larger
app.

It supports multiple real-time documents, with live cursors, based on
CodeMirror 6. The backend is stateless, and you bring your own transport — even
a boring HTTP handler works. There aren't any proprietary gadgets or opaque
configurations. It's just a distributed data structure in its purest pragmatic
form.

**Links: [GitHub](https://github.com/ekzhang/rushlight),
[Demo](https://rushlight.up.railway.app/)**`;const ws={title:Ji,date:Yi,repo:Xi,topics:ea,lead:ta,image:na,content:ia},ys=Object.freeze(Object.defineProperty({__proto__:null,content:ia,date:Yi,default:ws,image:na,lead:ta,repo:Xi,title:Ji,topics:ea},Symbol.toStringTag,{value:"Module"}));var aa="Rustpad",ra=new Date(16244064e5),sa="ekzhang/rustpad",oa=["Rust","Systems","TypeScript","React"],la="A self-hosted online collaborative code editor.",ca="rustpad.png",pa=`Rustpad is an efficient and minimal collaborative text editor based on the
_operational transformation_ algorithm. It lets users collaborate in real time
while writing code in their browser. Rustpad is completely self-hosted and fits
in a tiny Docker image, no database required.

Architecturally, client-side code communicates via WebSocket with a central
server that stores in-memory data structures. This makes the editor very fast,
allows us to avoid provisioning a database, and makes testing much easier. It
demonstrates the power of distributed systems and concurrent network
programming, designing with consideration for the entire stack.

**Links: [GitHub](https://github.com/ekzhang/rustpad),
[Website](https://rustpad.io/)**`;const $s={title:aa,date:ra,repo:sa,topics:oa,lead:la,image:ca,content:pa},xs=Object.freeze(Object.defineProperty({__proto__:null,content:pa,date:ra,default:$s,image:ca,lead:la,repo:sa,title:aa,topics:oa},Symbol.toStringTag,{value:"Module"}));var ua="Set with Friends",ha=new Date(15797376e5),ga="ekzhang/setwithfriends",da=["JavaScript","Game","React","Firebase"],ma="An online, real-time multiplayer card game.",fa="setwithfriends.png",_a=`_Set with Friends_ is a web implementation of a real-time pattern matching card
game called [Set](<https://en.wikipedia.org/wiki/Set_(card_game)>). Originally,
when I was at [SPARC 2019](https://sparc-camp.org/), I wondered how I could
bridge the 3000 mile gap between some of the friends I had made after we parted
ways. _Set with Friends_ lets you play Set online with minimal overhead (no
login necessary); it's as simple as sharing a custom link and having fun!

During the design process, I learned about Firebase, so working on this app
introduced me to serverless architectures and provided a good exercise in
creating live interfaces. We completely overhauled the design in May and
released version 2.0 in June. At its peak, the website had over 40,000 monthly
active users for half a year, and as of September 2022 there have been 5,000,000
games played.

**Links: [GitHub](https://github.com/ekzhang/setwithfriends),
[Website](https://setwithfriends.com/)**`;const js={title:ua,date:ha,repo:ga,topics:da,lead:ma,image:fa,content:_a},Ss=Object.freeze(Object.defineProperty({__proto__:null,content:_a,date:ha,default:js,image:fa,lead:ma,repo:ga,title:ua,topics:da},Symbol.toStringTag,{value:"Module"}));var ba="Pencil Sketch Rendering",va=new Date(1621728e6),ka="ekzhang/sketching",wa=["OpenGL","Graphics","Geometry","Algorithms"],ya="Geometry processing for real-time pencil sketching.",$a="sketching.png",xa=!0,ja=`This research project explores the task of drawing 3D objects, either triangle
meshes or implicitly represented as signed distance fields (SDFs), in the art
style of a pencil sketch. We review, implement, and extend existing methods with
geometry processing techniques.

Our primary contribution is a new scale-invariant algorithm for estimating
surface curvatures of an SDF within the graphics pipeline, which was a
previously unexplored topic. This algorithm has the advantage of enabling
real-time rendering of dynamic geometries at arbitrary scales (modeled by
implicit functions), without the noise sensitivity of mesh-based methods.

**Links: [GitHub](https://github.com/ekzhang/sketching),
[Website](https://pencil-sketching.vercel.app/),
[Paper](https://pencil-sketching.vercel.app/Pencil-Sketching.pdf)**`;const zs={title:ba,date:va,repo:ka,topics:wa,lead:ya,image:$a,image_border:xa,content:ja},Ts=Object.freeze(Object.defineProperty({__proto__:null,content:ja,date:va,default:zs,image:$a,image_border:xa,lead:ya,repo:ka,title:ba,topics:wa},Symbol.toStringTag,{value:"Module"}));var Sa="sshx",za=new Date(16991424e5),Ta="ekzhang/sshx",Oa=["Rust","Svelte","Systems"],Ra="A secure web-based, collaborative terminal.",Ia="sshx.png",Pa=`sshx takes your terminal and shares it on the web. It works on screens of all
sizes. Create new windows, resize, drag and drop, and see other people's cursors
as they type, with live output. Everything is end-to-end encrypted over a
low-latency global server mesh.

This was the synthesis of two years of planning, development and
experimentation. The result is a unique software artifact. It combines work as a
solo engineer, crafting a complex, performant streaming system, and as a
designer of deeply collaborative software.

**Links: [GitHub](https://github.com/ekzhang/sshx), [Website](https://sshx.io)**`;const Os={title:Sa,date:za,repo:Ta,topics:Oa,lead:Ra,image:Ia,content:Pa},Rs=Object.freeze(Object.defineProperty({__proto__:null,content:Pa,date:za,default:Os,image:Ia,lead:Ra,repo:Ta,title:Sa,topics:Oa},Symbol.toStringTag,{value:"Module"}));var La="Polygon Triangulation with Holes",Ma=new Date(15585696e5),Da="ekzhang/triangulate",Aa=["C++","Algorithms","Emscripten","Graphics"],Ca="Fast computational geometry algorithms in WebAssembly.",Ea="triangulate.png",qa=`This was an experiment to implement the <em>ear clipping</em> algorithm from
computational geometry for
[polygon triangulation](https://en.wikipedia.org/wiki/Polygon_triangulation).
Although easy to describe, triangulation is a surprisingly difficult problem, as
there are many corner cases involving concave polygons, holes, and nested
polygons. Therefore, we need to use some
[clever techniques](https://www.geometrictools.com/Documentation/TriangulationByEarClipping.pdf)
to make the problem tractable.

Note that there is a randomized O(N log<sup>\\*</sup> N) algorithm for this
problem
([Seidel 1991](https://www.sciencedirect.com/science/article/pii/0925772191900124)).
However, for most practical applications, ear clipping is fast enough and
produces more robust results, while having lower constant-factor overhead due to
the use of simpler data structures.

I implemented the algorithm in C++ from scratch, then compiled it to WebAssembly
using [Emscripten](https://emscripten.org/) to produce code that could be run by
the browser.

**Links: [GitHub](https://github.com/ekzhang/triangulate),
[Website](https://triangulate.surge.sh/)**`;const Is={title:La,date:Ma,repo:Da,topics:Aa,lead:Ca,image:Ea,content:qa},Ps=Object.freeze(Object.defineProperty({__proto__:null,content:qa,date:Ma,default:Is,image:Ea,lead:Ca,repo:Da,title:La,topics:Aa},Symbol.toStringTag,{value:"Module"}));var Ga="µKanren-rs",Ua=new Date(16313184e5),Ha="ekzhang/ukanren-rs",Wa=["Rust","Programming Languages","Systems"],Ba="A featherweight relational programming language.",Na="ukanren-rs.png",Fa=`This is a Rust implementation of µKanren, a very minimal language in the
miniKanren family. See the original Scheme implementation
[here](http://webyrd.net/scheme-2013/papers/HemannMuKanren2013.pdf) for
reference. Similar to how functional programming focuses on functions as the
core unit of abstraction, relational programming aims to represent common
mathematical concepts as _logical relations_.

The library was originally implemented as an exercise for a graduate programming
languages design seminar at Harvard, but I made the code available to the open
source community as a Rust crate.

**Links: [GitHub](https://github.com/ekzhang/ukanren-rs),
[Crates.io](https://crates.io/crates/ukanren),
[Documentation](https://docs.rs/ukanren)**`;const Ls={title:Ga,date:Ua,repo:Ha,topics:Wa,lead:Ba,image:Na,content:Fa},Ms=Object.freeze(Object.defineProperty({__proto__:null,content:Fa,date:Ua,default:Ls,image:Na,lead:Ba,repo:Ha,title:Ga,topics:Wa},Symbol.toStringTag,{value:"Module"}));var Za="Handwriting Generator",Va=new Date(15349824e5),Qa="ekzhang/vae-cnn-mnist",Ka=["Python","Machine Learning","Graphics"],Ja="Variational autoencoder that learns latent features in handwriting.",Ya="vae-cnn-mnist.png",Xa=`This is a neural network that encodes 28&times;28 images of handwritten
characters in a 6-dimensional latent space using deep learning. It consists of
two parts: an encoder block that puts the input through several convolutional
and downsampling layers to extract latent variables, and a decoder block that
takes latent variables and a label to reconstruct the original image, minimizing
mean squared error. During the training process, we add some Gaussian noise to
the latent space, which is the so-called "reparameterization trick" of a
[variational autoencoder](https://papers.nips.cc/paper/5775-learning-structured-output-representation-using-deep-conditional).

I implemented the model in Keras and trained it on a dataset of over 400,000
handwritten characters. You can see the results in the web demo below, which
stitches the outputs together onto a canvas. Without any prior knowledge, the
model is able to isolate six of the most important characteristics in human
handwriting.

**Links: [GitHub](https://github.com/ekzhang/vae-cnn-mnist),
[Demo](https://ekzhang.github.io/vae-cnn-mnist/)**`;const Ds={title:Za,date:Va,repo:Qa,topics:Ka,lead:Ja,image:Ya,content:Xa},As=Object.freeze(Object.defineProperty({__proto__:null,content:Xa,date:Va,default:Ds,image:Ya,lead:Ja,repo:Qa,title:Za,topics:Ka},Symbol.toStringTag,{value:"Module"}));var er="Competitive Programming Workspace",tr=new Date(15691968e5),nr="ekzhang/wkspace",ir=["JavaScript","CP","React","Express"],ar="An online, cloud-synchronized workspace for competitive programmers.",rr="wkspace.png",sr=`Top competitive programmers have dedicated setups on their local machines that
let them quickly creating new programs from templates, generate input files, and
run code on suites of test data. But what if you're working on a different
computer, and you don't have all of these tools installed?

_Workspace_ is a side-by-side problem viewer and code editor that allows you to
run code online. It supports advanced features like autocompletion and
automatically parses of test cases for each problem, saving time in a
programming competition. This was inspired by
[CS Academy](https://csacademy.com/)'s interface.

The web server lets you scrape problems from online judges at the click of a
button. All code is automatically saved and synchronized with a MongoDB instance
in the cloud, so it persists across sessions and browsers. See the website below
to try it out.

**Links: [GitHub](https://github.com/ekzhang/wkspace),
[Website](https://wkspace.herokuapp.com/)**`;const Cs={title:er,date:tr,repo:nr,topics:ir,lead:ar,image:rr,content:sr},Es=Object.freeze(Object.defineProperty({__proto__:null,content:sr,date:tr,default:Cs,image:rr,lead:ar,repo:nr,title:er,topics:ir},Symbol.toStringTag,{value:"Module"})),qs=""+new URL("../assets/bore.c871aed0.png",import.meta.url).href,Gs=Object.freeze(Object.defineProperty({__proto__:null,default:qs},Symbol.toStringTag,{value:"Module"})),Us=""+new URL("../assets/char-rnn-keras.c42f556f.png",import.meta.url).href,Hs=Object.freeze(Object.defineProperty({__proto__:null,default:Us},Symbol.toStringTag,{value:"Module"})),Ws=""+new URL("../assets/classes-wtf.8c2777c6.png",import.meta.url).href,Bs=Object.freeze(Object.defineProperty({__proto__:null,default:Ws},Symbol.toStringTag,{value:"Module"})),Ns=""+new URL("../assets/composing-studio.9747e7e4.png",import.meta.url).href,Fs=Object.freeze(Object.defineProperty({__proto__:null,default:Ns},Symbol.toStringTag,{value:"Module"})),Zs=""+new URL("../assets/crepe.9cd3565e.png",import.meta.url).href,Vs=Object.freeze(Object.defineProperty({__proto__:null,default:Zs},Symbol.toStringTag,{value:"Module"})),Qs=""+new URL("../assets/dispict.6a5cd3bd.jpg",import.meta.url).href,Ks=Object.freeze(Object.defineProperty({__proto__:null,default:Qs},Symbol.toStringTag,{value:"Module"})),Js=""+new URL("../assets/fastseg.22e6688c.jpg",import.meta.url).href,Ys=Object.freeze(Object.defineProperty({__proto__:null,default:Js},Symbol.toStringTag,{value:"Module"})),Xs=""+new URL("../assets/game-of-life.0c13ef05.png",import.meta.url).href,eo=Object.freeze(Object.defineProperty({__proto__:null,default:Xs},Symbol.toStringTag,{value:"Module"})),to=""+new URL("../assets/graphics-workshop.8c21b2ee.png",import.meta.url).href,no=Object.freeze(Object.defineProperty({__proto__:null,default:to},Symbol.toStringTag,{value:"Module"})),io=""+new URL("../assets/gravity.bc8c441c.png",import.meta.url).href,ao=Object.freeze(Object.defineProperty({__proto__:null,default:io},Symbol.toStringTag,{value:"Module"})),ro=""+new URL("../assets/harmony.25e58fd0.png",import.meta.url).href,so=Object.freeze(Object.defineProperty({__proto__:null,default:ro},Symbol.toStringTag,{value:"Module"})),oo=""+new URL("../assets/inline-sql.509c1895.png",import.meta.url).href,lo=Object.freeze(Object.defineProperty({__proto__:null,default:oo},Symbol.toStringTag,{value:"Module"})),co=""+new URL("../assets/julia-1.e84616bd.jpg",import.meta.url).href,po=Object.freeze(Object.defineProperty({__proto__:null,default:co},Symbol.toStringTag,{value:"Module"})),uo=""+new URL("../assets/julia-2.d3f67f15.jpg",import.meta.url).href,ho=Object.freeze(Object.defineProperty({__proto__:null,default:uo},Symbol.toStringTag,{value:"Module"})),go=""+new URL("../assets/julia-3.ec6a39cb.jpg",import.meta.url).href,mo=Object.freeze(Object.defineProperty({__proto__:null,default:go},Symbol.toStringTag,{value:"Module"})),fo=""+new URL("../assets/julia-4.7de9e4df.jpg",import.meta.url).href,_o=Object.freeze(Object.defineProperty({__proto__:null,default:fo},Symbol.toStringTag,{value:"Module"})),bo=""+new URL("../assets/langevin-music.66e4579e.png",import.meta.url).href,vo=Object.freeze(Object.defineProperty({__proto__:null,default:bo},Symbol.toStringTag,{value:"Module"})),ko=""+new URL("../assets/library.88782b31.png",import.meta.url).href,wo=Object.freeze(Object.defineProperty({__proto__:null,default:ko},Symbol.toStringTag,{value:"Module"})),yo=""+new URL("../assets/percival.a6115ad8.png",import.meta.url).href,$o=Object.freeze(Object.defineProperty({__proto__:null,default:yo},Symbol.toStringTag,{value:"Module"})),xo=""+new URL("../assets/rustpad.2cbc1bb1.png",import.meta.url).href,jo=Object.freeze(Object.defineProperty({__proto__:null,default:xo},Symbol.toStringTag,{value:"Module"})),So=""+new URL("../assets/redis-rope.e1e2ba4e.svg",import.meta.url).href,zo=Object.freeze(Object.defineProperty({__proto__:null,default:So},Symbol.toStringTag,{value:"Module"})),To=""+new URL("../assets/rpt.fb795885.jpg",import.meta.url).href,Oo=Object.freeze(Object.defineProperty({__proto__:null,default:To},Symbol.toStringTag,{value:"Module"})),Ro=""+new URL("../assets/rushlight.7db2943a.jpg",import.meta.url).href,Io=Object.freeze(Object.defineProperty({__proto__:null,default:Ro},Symbol.toStringTag,{value:"Module"})),Po=""+new URL("../assets/rustpad.2cbc1bb1.png",import.meta.url).href,Lo=Object.freeze(Object.defineProperty({__proto__:null,default:Po},Symbol.toStringTag,{value:"Module"})),Mo=""+new URL("../assets/setwithfriends.e814f490.png",import.meta.url).href,Do=Object.freeze(Object.defineProperty({__proto__:null,default:Mo},Symbol.toStringTag,{value:"Module"})),Ao=""+new URL("../assets/sketching.8c77a336.png",import.meta.url).href,Co=Object.freeze(Object.defineProperty({__proto__:null,default:Ao},Symbol.toStringTag,{value:"Module"})),Eo=""+new URL("../assets/sshx.ea086053.png",import.meta.url).href,qo=Object.freeze(Object.defineProperty({__proto__:null,default:Eo},Symbol.toStringTag,{value:"Module"})),Go=""+new URL("../assets/triangulate.9c829ea2.png",import.meta.url).href,Uo=Object.freeze(Object.defineProperty({__proto__:null,default:Go},Symbol.toStringTag,{value:"Module"})),Ho=""+new URL("../assets/ukanren-rs.b09debb9.png",import.meta.url).href,Wo=Object.freeze(Object.defineProperty({__proto__:null,default:Ho},Symbol.toStringTag,{value:"Module"})),Bo=""+new URL("../assets/vae-cnn-mnist.2c640af4.png",import.meta.url).href,No=Object.freeze(Object.defineProperty({__proto__:null,default:Bo},Symbol.toStringTag,{value:"Module"})),Fo=""+new URL("../assets/wkspace.a04b6a8c.png",import.meta.url).href,Zo=Object.freeze(Object.defineProperty({__proto__:null,default:Fo},Symbol.toStringTag,{value:"Module"}));function or(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let le=or();function Vo(s){le=s}const lr=/[&<>"']/,Qo=new RegExp(lr.source,"g"),cr=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Ko=new RegExp(cr.source,"g"),Jo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},at=s=>Jo[s];function Z(s,t){if(t){if(lr.test(s))return s.replace(Qo,at)}else if(cr.test(s))return s.replace(Ko,at);return s}const Yo=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function pr(s){return s.replace(Yo,(t,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const Xo=/(^|[^\[])\^/g;function O(s,t){s=typeof s=="string"?s:s.source,t=t||"";const n={replace:(e,i)=>(i=i.source||i,i=i.replace(Xo,"$1"),s=s.replace(e,i),n),getRegex:()=>new RegExp(s,t)};return n}const el=/[^\w:]/g,tl=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function rt(s,t,n){if(s){let e;try{e=decodeURIComponent(pr(n)).replace(el,"").toLowerCase()}catch{return null}if(e.indexOf("javascript:")===0||e.indexOf("vbscript:")===0||e.indexOf("data:")===0)return null}t&&!tl.test(n)&&(n=rl(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const je={},nl=/^[^:]+:\/*[^/]*$/,il=/^([^:]+:)[\s\S]*$/,al=/^([^:]+:\/*[^/]*)[\s\S]*$/;function rl(s,t){je[" "+s]||(nl.test(s)?je[" "+s]=s+"/":je[" "+s]=Se(s,"/",!0)),s=je[" "+s];const n=s.indexOf(":")===-1;return t.substring(0,2)==="//"?n?t:s.replace(il,"$1")+t:t.charAt(0)==="/"?n?t:s.replace(al,"$1")+t:s+t}const Oe={exec:function(){}};function st(s,t){const n=s.replace(/\|/g,(a,r,o)=>{let l=!1,c=r;for(;--c>=0&&o[c]==="\\";)l=!l;return l?"|":" |"}),e=n.split(/ \|/);let i=0;if(e[0].trim()||e.shift(),e.length>0&&!e[e.length-1].trim()&&e.pop(),e.length>t)e.splice(t);else for(;e.length<t;)e.push("");for(;i<e.length;i++)e[i]=e[i].trim().replace(/\\\|/g,"|");return e}function Se(s,t,n){const e=s.length;if(e===0)return"";let i=0;for(;i<e;){const a=s.charAt(e-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return s.slice(0,e-i)}function sl(s,t){if(s.indexOf(t[1])===-1)return-1;const n=s.length;let e=0,i=0;for(;i<n;i++)if(s[i]==="\\")i++;else if(s[i]===t[0])e++;else if(s[i]===t[1]&&(e--,e<0))return i;return-1}function ol(s){s&&s.sanitize&&!s.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function ot(s,t){if(t<1)return"";let n="";for(;t>1;)t&1&&(n+=s),t>>=1,s+=s;return n+s}function lt(s,t,n,e){const i=t.href,a=t.title?Z(t.title):null,r=s[1].replace(/\\([\[\]])/g,"$1");if(s[0].charAt(0)!=="!"){e.state.inLink=!0;const o={type:"link",raw:n,href:i,title:a,text:r,tokens:e.inlineTokens(r)};return e.state.inLink=!1,o}return{type:"image",raw:n,href:i,title:a,text:Z(r)}}function ll(s,t){const n=s.match(/^(\s+)(?:```)/);if(n===null)return t;const e=n[1];return t.split(`
`).map(i=>{const a=i.match(/^\s+/);if(a===null)return i;const[r]=a;return r.length>=e.length?i.slice(e.length):i}).join(`
`)}class Ee{constructor(t){this.options=t||le}space(t){const n=this.rules.block.newline.exec(t);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(t){const n=this.rules.block.code.exec(t);if(n){const e=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?e:Se(e,`
`)}}}fences(t){const n=this.rules.block.fences.exec(t);if(n){const e=n[0],i=ll(e,n[3]||"");return{type:"code",raw:e,lang:n[2]?n[2].trim().replace(this.rules.inline._escapes,"$1"):n[2],text:i}}}heading(t){const n=this.rules.block.heading.exec(t);if(n){let e=n[2].trim();if(/#$/.test(e)){const i=Se(e,"#");(this.options.pedantic||!i||/ $/.test(i))&&(e=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(t){const n=this.rules.block.hr.exec(t);if(n)return{type:"hr",raw:n[0]}}blockquote(t){const n=this.rules.block.blockquote.exec(t);if(n){const e=n[0].replace(/^ *>[ \t]?/gm,""),i=this.lexer.state.top;this.lexer.state.top=!0;const a=this.lexer.blockTokens(e);return this.lexer.state.top=i,{type:"blockquote",raw:n[0],tokens:a,text:e}}}list(t){let n=this.rules.block.list.exec(t);if(n){let e,i,a,r,o,l,c,p,d,f,u,C,I=n[1].trim();const D=I.length>1,$={type:"list",raw:"",ordered:D,start:D?+I.slice(0,-1):"",loose:!1,items:[]};I=D?`\\d{1,9}\\${I.slice(-1)}`:`\\${I}`,this.options.pedantic&&(I=D?I:"[*+-]");const S=new RegExp(`^( {0,3}${I})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;t&&(C=!1,!(!(n=S.exec(t))||this.rules.block.hr.test(t)));){if(e=n[0],t=t.substring(e.length),p=n[2].split(`
`,1)[0].replace(/^\t+/,U=>" ".repeat(3*U.length)),d=t.split(`
`,1)[0],this.options.pedantic?(r=2,u=p.trimLeft()):(r=n[2].search(/[^ ]/),r=r>4?1:r,u=p.slice(r),r+=n[1].length),l=!1,!p&&/^ *$/.test(d)&&(e+=d+`
`,t=t.substring(d.length+1),C=!0),!C){const U=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),E=new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),L=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),H=new RegExp(`^ {0,${Math.min(3,r-1)}}#`);for(;t&&(f=t.split(`
`,1)[0],d=f,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(L.test(d)||H.test(d)||U.test(d)||E.test(t)));){if(d.search(/[^ ]/)>=r||!d.trim())u+=`
`+d.slice(r);else{if(l||p.search(/[^ ]/)>=4||L.test(p)||H.test(p)||E.test(p))break;u+=`
`+d}!l&&!d.trim()&&(l=!0),e+=f+`
`,t=t.substring(f.length+1),p=d.slice(r)}}$.loose||(c?$.loose=!0:/\n *\n *$/.test(e)&&(c=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(u),i&&(a=i[0]!=="[ ] ",u=u.replace(/^\[[ xX]\] +/,""))),$.items.push({type:"list_item",raw:e,task:!!i,checked:a,loose:!1,text:u}),$.raw+=e}$.items[$.items.length-1].raw=e.trimRight(),$.items[$.items.length-1].text=u.trimRight(),$.raw=$.raw.trimRight();const M=$.items.length;for(o=0;o<M;o++)if(this.lexer.state.top=!1,$.items[o].tokens=this.lexer.blockTokens($.items[o].text,[]),!$.loose){const U=$.items[o].tokens.filter(L=>L.type==="space"),E=U.length>0&&U.some(L=>/\n.*\n/.test(L.raw));$.loose=E}if($.loose)for(o=0;o<M;o++)$.items[o].loose=!0;return $}}html(t){const n=this.rules.block.html.exec(t);if(n){const e={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};if(this.options.sanitize){const i=this.options.sanitizer?this.options.sanitizer(n[0]):Z(n[0]);e.type="paragraph",e.text=i,e.tokens=this.lexer.inline(i)}return e}}def(t){const n=this.rules.block.def.exec(t);if(n){const e=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",a=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline._escapes,"$1"):n[3];return{type:"def",tag:e,raw:n[0],href:i,title:a}}}table(t){const n=this.rules.block.table.exec(t);if(n){const e={type:"table",header:st(n[1]).map(i=>({text:i})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(e.header.length===e.align.length){e.raw=n[0];let i=e.align.length,a,r,o,l;for(a=0;a<i;a++)/^ *-+: *$/.test(e.align[a])?e.align[a]="right":/^ *:-+: *$/.test(e.align[a])?e.align[a]="center":/^ *:-+ *$/.test(e.align[a])?e.align[a]="left":e.align[a]=null;for(i=e.rows.length,a=0;a<i;a++)e.rows[a]=st(e.rows[a],e.header.length).map(c=>({text:c}));for(i=e.header.length,r=0;r<i;r++)e.header[r].tokens=this.lexer.inline(e.header[r].text);for(i=e.rows.length,r=0;r<i;r++)for(l=e.rows[r],o=0;o<l.length;o++)l[o].tokens=this.lexer.inline(l[o].text);return e}}}lheading(t){const n=this.rules.block.lheading.exec(t);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(t){const n=this.rules.block.paragraph.exec(t);if(n){const e=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:e,tokens:this.lexer.inline(e)}}}text(t){const n=this.rules.block.text.exec(t);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(t){const n=this.rules.inline.escape.exec(t);if(n)return{type:"escape",raw:n[0],text:Z(n[1])}}tag(t){const n=this.rules.inline.tag.exec(t);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):Z(n[0]):n[0]}}link(t){const n=this.rules.inline.link.exec(t);if(n){const e=n[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const r=Se(e.slice(0,-1),"\\");if((e.length-r.length)%2===0)return}else{const r=sl(n[2],"()");if(r>-1){const l=(n[0].indexOf("!")===0?5:4)+n[1].length+r;n[2]=n[2].substring(0,r),n[0]=n[0].substring(0,l).trim(),n[3]=""}}let i=n[2],a="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);r&&(i=r[1],a=r[3])}else a=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(e)?i=i.slice(1):i=i.slice(1,-1)),lt(n,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:a&&a.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(t,n){let e;if((e=this.rules.inline.reflink.exec(t))||(e=this.rules.inline.nolink.exec(t))){let i=(e[2]||e[1]).replace(/\s+/g," ");if(i=n[i.toLowerCase()],!i){const a=e[0].charAt(0);return{type:"text",raw:a,text:a}}return lt(e,i,e[0],this.lexer)}}emStrong(t,n,e=""){let i=this.rules.inline.emStrong.lDelim.exec(t);if(!i||i[3]&&e.match(/[\p{L}\p{N}]/u))return;const a=i[1]||i[2]||"";if(!a||a&&(e===""||this.rules.inline.punctuation.exec(e))){const r=i[0].length-1;let o,l,c=r,p=0;const d=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(d.lastIndex=0,n=n.slice(-1*t.length+r);(i=d.exec(n))!=null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(l=o.length,i[3]||i[4]){c+=l;continue}else if((i[5]||i[6])&&r%3&&!((r+l)%3)){p+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+p);const f=t.slice(0,r+i.index+(i[0].length-o.length)+l);if(Math.min(r,l)%2){const C=f.slice(1,-1);return{type:"em",raw:f,text:C,tokens:this.lexer.inlineTokens(C)}}const u=f.slice(2,-2);return{type:"strong",raw:f,text:u,tokens:this.lexer.inlineTokens(u)}}}}codespan(t){const n=this.rules.inline.code.exec(t);if(n){let e=n[2].replace(/\n/g," ");const i=/[^ ]/.test(e),a=/^ /.test(e)&&/ $/.test(e);return i&&a&&(e=e.substring(1,e.length-1)),e=Z(e,!0),{type:"codespan",raw:n[0],text:e}}}br(t){const n=this.rules.inline.br.exec(t);if(n)return{type:"br",raw:n[0]}}del(t){const n=this.rules.inline.del.exec(t);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(t,n){const e=this.rules.inline.autolink.exec(t);if(e){let i,a;return e[2]==="@"?(i=Z(this.options.mangle?n(e[1]):e[1]),a="mailto:"+i):(i=Z(e[1]),a=i),{type:"link",raw:e[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}url(t,n){let e;if(e=this.rules.inline.url.exec(t)){let i,a;if(e[2]==="@")i=Z(this.options.mangle?n(e[0]):e[0]),a="mailto:"+i;else{let r;do r=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])[0];while(r!==e[0]);i=Z(e[0]),e[1]==="www."?a="http://"+e[0]:a=e[0]}return{type:"link",raw:e[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(t,n){const e=this.rules.inline.text.exec(t);if(e){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):Z(e[0]):e[0]:i=Z(this.options.smartypants?n(e[0]):e[0]),{type:"text",raw:e[0],text:i}}}}const v={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Oe,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};v._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;v._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;v.def=O(v.def).replace("label",v._label).replace("title",v._title).getRegex();v.bullet=/(?:[*+-]|\d{1,9}[.)])/;v.listItemStart=O(/^( *)(bull) */).replace("bull",v.bullet).getRegex();v.list=O(v.list).replace(/bull/g,v.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+v.def.source+")").getRegex();v._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";v._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;v.html=O(v.html,"i").replace("comment",v._comment).replace("tag",v._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();v.paragraph=O(v._paragraph).replace("hr",v.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v._tag).getRegex();v.blockquote=O(v.blockquote).replace("paragraph",v.paragraph).getRegex();v.normal={...v};v.gfm={...v.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};v.gfm.table=O(v.gfm.table).replace("hr",v.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v._tag).getRegex();v.gfm.paragraph=O(v._paragraph).replace("hr",v.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",v.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v._tag).getRegex();v.pedantic={...v.normal,html:O(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",v._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Oe,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:O(v.normal._paragraph).replace("hr",v.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",v.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const g={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Oe,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Oe,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};g._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";g.punctuation=O(g.punctuation).replace(/punctuation/g,g._punctuation).getRegex();g.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;g.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g;g._comment=O(v._comment).replace("(?:-->|$)","-->").getRegex();g.emStrong.lDelim=O(g.emStrong.lDelim).replace(/punct/g,g._punctuation).getRegex();g.emStrong.rDelimAst=O(g.emStrong.rDelimAst,"g").replace(/punct/g,g._punctuation).getRegex();g.emStrong.rDelimUnd=O(g.emStrong.rDelimUnd,"g").replace(/punct/g,g._punctuation).getRegex();g._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;g._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;g._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;g.autolink=O(g.autolink).replace("scheme",g._scheme).replace("email",g._email).getRegex();g._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;g.tag=O(g.tag).replace("comment",g._comment).replace("attribute",g._attribute).getRegex();g._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;g._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;g._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;g.link=O(g.link).replace("label",g._label).replace("href",g._href).replace("title",g._title).getRegex();g.reflink=O(g.reflink).replace("label",g._label).replace("ref",v._label).getRegex();g.nolink=O(g.nolink).replace("ref",v._label).getRegex();g.reflinkSearch=O(g.reflinkSearch,"g").replace("reflink",g.reflink).replace("nolink",g.nolink).getRegex();g.normal={...g};g.pedantic={...g.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:O(/^!?\[(label)\]\((.*?)\)/).replace("label",g._label).getRegex(),reflink:O(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",g._label).getRegex()};g.gfm={...g.normal,escape:O(g.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};g.gfm.url=O(g.gfm.url,"i").replace("email",g.gfm._extended_email).getRegex();g.breaks={...g.gfm,br:O(g.br).replace("{2,}","*").getRegex(),text:O(g.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function cl(s){return s.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function ct(s){let t="",n,e;const i=s.length;for(n=0;n<i;n++)e=s.charCodeAt(n),Math.random()>.5&&(e="x"+e.toString(16)),t+="&#"+e+";";return t}class ne{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||le,this.options.tokenizer=this.options.tokenizer||new Ee,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:v.normal,inline:g.normal};this.options.pedantic?(n.block=v.pedantic,n.inline=g.pedantic):this.options.gfm&&(n.block=v.gfm,this.options.breaks?n.inline=g.breaks:n.inline=g.gfm),this.tokenizer.rules=n}static get rules(){return{block:v,inline:g}}static lex(t,n){return new ne(n).lex(t)}static lexInline(t,n){return new ne(n).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(t,n=[]){this.options.pedantic?t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t=t.replace(/^( *)(\t+)/gm,(o,l,c)=>l+"    ".repeat(c.length));let e,i,a,r;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(e=o.call({lexer:this},t,n))?(t=t.substring(e.raw.length),n.push(e),!0):!1))){if(e=this.tokenizer.space(t)){t=t.substring(e.raw.length),e.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(e);continue}if(e=this.tokenizer.code(t)){t=t.substring(e.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(e);continue}if(e=this.tokenizer.fences(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.heading(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.hr(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.blockquote(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.list(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.html(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.def(t)){t=t.substring(e.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+e.raw,i.text+=`
`+e.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[e.tag]||(this.tokens.links[e.tag]={href:e.href,title:e.title});continue}if(e=this.tokenizer.table(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.lheading(t)){t=t.substring(e.raw.length),n.push(e);continue}if(a=t,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const l=t.slice(1);let c;this.options.extensions.startBlock.forEach(function(p){c=p.call({lexer:this},l),typeof c=="number"&&c>=0&&(o=Math.min(o,c))}),o<1/0&&o>=0&&(a=t.substring(0,o+1))}if(this.state.top&&(e=this.tokenizer.paragraph(a))){i=n[n.length-1],r&&i.type==="paragraph"?(i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(e),r=a.length!==t.length,t=t.substring(e.raw.length);continue}if(e=this.tokenizer.text(t)){t=t.substring(e.raw.length),i=n[n.length-1],i&&i.type==="text"?(i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(e);continue}if(t){const o="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let e,i,a,r=t,o,l,c;if(this.tokens.links){const p=Object.keys(this.tokens.links);if(p.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)p.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,o.index)+"["+ot("a",o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,o.index)+"["+ot("a",o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.escapedEmSt.exec(r))!=null;)r=r.slice(0,o.index+o[0].length-2)+"++"+r.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;t;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(p=>(e=p.call({lexer:this},t,n))?(t=t.substring(e.raw.length),n.push(e),!0):!1))){if(e=this.tokenizer.escape(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.tag(t)){t=t.substring(e.raw.length),i=n[n.length-1],i&&e.type==="text"&&i.type==="text"?(i.raw+=e.raw,i.text+=e.text):n.push(e);continue}if(e=this.tokenizer.link(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(e.raw.length),i=n[n.length-1],i&&e.type==="text"&&i.type==="text"?(i.raw+=e.raw,i.text+=e.text):n.push(e);continue}if(e=this.tokenizer.emStrong(t,r,c)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.codespan(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.br(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.del(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.autolink(t,ct)){t=t.substring(e.raw.length),n.push(e);continue}if(!this.state.inLink&&(e=this.tokenizer.url(t,ct))){t=t.substring(e.raw.length),n.push(e);continue}if(a=t,this.options.extensions&&this.options.extensions.startInline){let p=1/0;const d=t.slice(1);let f;this.options.extensions.startInline.forEach(function(u){f=u.call({lexer:this},d),typeof f=="number"&&f>=0&&(p=Math.min(p,f))}),p<1/0&&p>=0&&(a=t.substring(0,p+1))}if(e=this.tokenizer.inlineText(a,cl)){t=t.substring(e.raw.length),e.raw.slice(-1)!=="_"&&(c=e.raw.slice(-1)),l=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=e.raw,i.text+=e.text):n.push(e);continue}if(t){const p="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return n}}class qe{constructor(t){this.options=t||le}code(t,n,e){const i=(n||"").match(/\S*/)[0];if(this.options.highlight){const a=this.options.highlight(t,i);a!=null&&a!==t&&(e=!0,t=a)}return t=t.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+Z(i)+'">'+(e?t:Z(t,!0))+`</code></pre>
`:"<pre><code>"+(e?t:Z(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t){return t}heading(t,n,e,i){if(this.options.headerIds){const a=this.options.headerPrefix+i.slug(e);return`<h${n} id="${a}">${t}</h${n}>
`}return`<h${n}>${t}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,n,e){const i=n?"ol":"ul",a=n&&e!==1?' start="'+e+'"':"";return"<"+i+a+`>
`+t+"</"+i+`>
`}listitem(t){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return`<p>${t}</p>
`}table(t,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+n+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,n){const e=n.header?"th":"td";return(n.align?`<${e} align="${n.align}">`:`<${e}>`)+t+`</${e}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return`<del>${t}</del>`}link(t,n,e){if(t=rt(this.options.sanitize,this.options.baseUrl,t),t===null)return e;let i='<a href="'+t+'"';return n&&(i+=' title="'+n+'"'),i+=">"+e+"</a>",i}image(t,n,e){if(t=rt(this.options.sanitize,this.options.baseUrl,t),t===null)return e;let i=`<img src="${t}" alt="${e}"`;return n&&(i+=` title="${n}"`),i+=this.options.xhtml?"/>":">",i}text(t){return t}}class ur{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,n,e){return""+e}image(t,n,e){return""+e}br(){return""}}class hr{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,n){let e=t,i=0;if(this.seen.hasOwnProperty(e)){i=this.seen[t];do i++,e=t+"-"+i;while(this.seen.hasOwnProperty(e))}return n||(this.seen[t]=i,this.seen[e]=0),e}slug(t,n={}){const e=this.serialize(t);return this.getNextSafeSlug(e,n.dryrun)}}class ie{constructor(t){this.options=t||le,this.options.renderer=this.options.renderer||new qe,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ur,this.slugger=new hr}static parse(t,n){return new ie(n).parse(t)}static parseInline(t,n){return new ie(n).parseInline(t)}parse(t,n=!0){let e="",i,a,r,o,l,c,p,d,f,u,C,I,D,$,S,M,U,E,L;const H=t.length;for(i=0;i<H;i++){if(u=t[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]&&(L=this.options.extensions.renderers[u.type].call({parser:this},u),L!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type))){e+=L||"";continue}switch(u.type){case"space":continue;case"hr":{e+=this.renderer.hr();continue}case"heading":{e+=this.renderer.heading(this.parseInline(u.tokens),u.depth,pr(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue}case"code":{e+=this.renderer.code(u.text,u.lang,u.escaped);continue}case"table":{for(d="",p="",o=u.header.length,a=0;a<o;a++)p+=this.renderer.tablecell(this.parseInline(u.header[a].tokens),{header:!0,align:u.align[a]});for(d+=this.renderer.tablerow(p),f="",o=u.rows.length,a=0;a<o;a++){for(c=u.rows[a],p="",l=c.length,r=0;r<l;r++)p+=this.renderer.tablecell(this.parseInline(c[r].tokens),{header:!1,align:u.align[r]});f+=this.renderer.tablerow(p)}e+=this.renderer.table(d,f);continue}case"blockquote":{f=this.parse(u.tokens),e+=this.renderer.blockquote(f);continue}case"list":{for(C=u.ordered,I=u.start,D=u.loose,o=u.items.length,f="",a=0;a<o;a++)S=u.items[a],M=S.checked,U=S.task,$="",S.task&&(E=this.renderer.checkbox(M),D?S.tokens.length>0&&S.tokens[0].type==="paragraph"?(S.tokens[0].text=E+" "+S.tokens[0].text,S.tokens[0].tokens&&S.tokens[0].tokens.length>0&&S.tokens[0].tokens[0].type==="text"&&(S.tokens[0].tokens[0].text=E+" "+S.tokens[0].tokens[0].text)):S.tokens.unshift({type:"text",text:E}):$+=E),$+=this.parse(S.tokens,D),f+=this.renderer.listitem($,U,M);e+=this.renderer.list(f,C,I);continue}case"html":{e+=this.renderer.html(u.text);continue}case"paragraph":{e+=this.renderer.paragraph(this.parseInline(u.tokens));continue}case"text":{for(f=u.tokens?this.parseInline(u.tokens):u.text;i+1<H&&t[i+1].type==="text";)u=t[++i],f+=`
`+(u.tokens?this.parseInline(u.tokens):u.text);e+=n?this.renderer.paragraph(f):f;continue}default:{const q='Token with "'+u.type+'" type was not found.';if(this.options.silent){console.error(q);return}else throw new Error(q)}}}return e}parseInline(t,n){n=n||this.renderer;let e="",i,a,r;const o=t.length;for(i=0;i<o;i++){if(a=t[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]&&(r=this.options.extensions.renderers[a.type].call({parser:this},a),r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type))){e+=r||"";continue}switch(a.type){case"escape":{e+=n.text(a.text);break}case"html":{e+=n.html(a.text);break}case"link":{e+=n.link(a.href,a.title,this.parseInline(a.tokens,n));break}case"image":{e+=n.image(a.href,a.title,a.text);break}case"strong":{e+=n.strong(this.parseInline(a.tokens,n));break}case"em":{e+=n.em(this.parseInline(a.tokens,n));break}case"codespan":{e+=n.codespan(a.text);break}case"br":{e+=n.br();break}case"del":{e+=n.del(this.parseInline(a.tokens,n));break}case"text":{e+=n.text(a.text);break}default:{const l='Token with "'+a.type+'" type was not found.';if(this.options.silent){console.error(l);return}else throw new Error(l)}}}return e}}class Re{constructor(t){this.options=t||le}preprocess(t){return t}postprocess(t){return t}}Ye(Re,"passThroughHooks",new Set(["preprocess","postprocess"]));function pl(s,t,n){return e=>{if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,s){const i="<p>An error occurred:</p><pre>"+Z(e.message+"",!0)+"</pre>";if(t)return Promise.resolve(i);if(n){n(null,i);return}return i}if(t)return Promise.reject(e);if(n){n(e);return}throw e}}function gr(s,t){return(n,e,i)=>{typeof e=="function"&&(i=e,e=null);const a={...e};e={...b.defaults,...a};const r=pl(e.silent,e.async,i);if(typeof n>"u"||n===null)return r(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return r(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(ol(e),e.hooks&&(e.hooks.options=e),i){const o=e.highlight;let l;try{e.hooks&&(n=e.hooks.preprocess(n)),l=s(n,e)}catch(d){return r(d)}const c=function(d){let f;if(!d)try{e.walkTokens&&b.walkTokens(l,e.walkTokens),f=t(l,e),e.hooks&&(f=e.hooks.postprocess(f))}catch(u){d=u}return e.highlight=o,d?r(d):i(null,f)};if(!o||o.length<3||(delete e.highlight,!l.length))return c();let p=0;b.walkTokens(l,function(d){d.type==="code"&&(p++,setTimeout(()=>{o(d.text,d.lang,function(f,u){if(f)return c(f);u!=null&&u!==d.text&&(d.text=u,d.escaped=!0),p--,p===0&&c()})},0))}),p===0&&c();return}if(e.async)return Promise.resolve(e.hooks?e.hooks.preprocess(n):n).then(o=>s(o,e)).then(o=>e.walkTokens?Promise.all(b.walkTokens(o,e.walkTokens)).then(()=>o):o).then(o=>t(o,e)).then(o=>e.hooks?e.hooks.postprocess(o):o).catch(r);try{e.hooks&&(n=e.hooks.preprocess(n));const o=s(n,e);e.walkTokens&&b.walkTokens(o,e.walkTokens);let l=t(o,e);return e.hooks&&(l=e.hooks.postprocess(l)),l}catch(o){return r(o)}}}function b(s,t,n){return gr(ne.lex,ie.parse)(s,t,n)}b.options=b.setOptions=function(s){return b.defaults={...b.defaults,...s},Vo(b.defaults),b};b.getDefaults=or;b.defaults=le;b.use=function(...s){const t=b.defaults.extensions||{renderers:{},childTokens:{}};s.forEach(n=>{const e={...n};if(e.async=b.defaults.async||e.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const a=t.renderers[i.name];a?t.renderers[i.name]=function(...r){let o=i.renderer.apply(this,r);return o===!1&&(o=a.apply(this,r)),o}:t.renderers[i.name]=i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[i.level]?t[i.level].unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),e.extensions=t),n.renderer){const i=b.defaults.renderer||new qe;for(const a in n.renderer){const r=i[a];i[a]=(...o)=>{let l=n.renderer[a].apply(i,o);return l===!1&&(l=r.apply(i,o)),l}}e.renderer=i}if(n.tokenizer){const i=b.defaults.tokenizer||new Ee;for(const a in n.tokenizer){const r=i[a];i[a]=(...o)=>{let l=n.tokenizer[a].apply(i,o);return l===!1&&(l=r.apply(i,o)),l}}e.tokenizer=i}if(n.hooks){const i=b.defaults.hooks||new Re;for(const a in n.hooks){const r=i[a];Re.passThroughHooks.has(a)?i[a]=o=>{if(b.defaults.async)return Promise.resolve(n.hooks[a].call(i,o)).then(c=>r.call(i,c));const l=n.hooks[a].call(i,o);return r.call(i,l)}:i[a]=(...o)=>{let l=n.hooks[a].apply(i,o);return l===!1&&(l=r.apply(i,o)),l}}e.hooks=i}if(n.walkTokens){const i=b.defaults.walkTokens;e.walkTokens=function(a){let r=[];return r.push(n.walkTokens.call(this,a)),i&&(r=r.concat(i.call(this,a))),r}}b.setOptions(e)})};b.walkTokens=function(s,t){let n=[];for(const e of s)switch(n=n.concat(t.call(b,e)),e.type){case"table":{for(const i of e.header)n=n.concat(b.walkTokens(i.tokens,t));for(const i of e.rows)for(const a of i)n=n.concat(b.walkTokens(a.tokens,t));break}case"list":{n=n.concat(b.walkTokens(e.items,t));break}default:b.defaults.extensions&&b.defaults.extensions.childTokens&&b.defaults.extensions.childTokens[e.type]?b.defaults.extensions.childTokens[e.type].forEach(function(i){n=n.concat(b.walkTokens(e[i],t))}):e.tokens&&(n=n.concat(b.walkTokens(e.tokens,t)))}return n};b.parseInline=gr(ne.lexInline,ie.parseInline);b.Parser=ie;b.parser=ie.parse;b.Renderer=qe;b.TextRenderer=ur;b.Lexer=ne;b.lexer=ne.lex;b.Tokenizer=Ee;b.Slugger=hr;b.Hooks=Re;b.parse=b;b.options;b.setOptions;b.use;b.walkTokens;b.parseInline;ie.parse;ne.lex;function ul(s){let t;return{c(){t=x("div"),this.h()},l(n){t=j(n,"DIV",{class:!0});var e=z(t);e.forEach(_),this.h()},h(){w(t,"class","md-output svelte-19wf98v")},m(n,e){G(n,t,e),t.innerHTML=s[0]},p(n,[e]){e&1&&(t.innerHTML=n[0])},i:et,o:et,d(n){n&&_(t)}}}function hl(s,t,n){let e,{source:i}=t;return b.use({renderer:{link(a,r,o){let l=`<a rel="external" href="${encodeURI(a)}" class="link"`;return r&&(l+=' title="'+r+'"'),l+=">"+o+"</a>",l}}}),s.$$set=a=>{"source"in a&&n(1,i=a.source)},s.$$.update=()=>{s.$$.dirty&2&&n(0,e=b.parse(i,{smartLists:!0,smartypants:!0}))},[e,i]}class gl extends Pe{constructor(t){super(),Le(this,t,hl,ul,Me,{source:1})}}function pt(s,t,n){const e=s.slice();return e[2]=t[n],e}function ut(s,t,n){const e=s.slice();return e[5]=t[n],e}function ht(s){let t,n=s[5]+"",e;return{c(){t=x("div"),e=J(n),this.h()},l(i){t=j(i,"DIV",{class:!0});var a=z(t);e=Y(a,n),a.forEach(_),this.h()},h(){w(t,"class","pill svelte-1d8a62h")},m(i,a){G(i,t,a),k(t,e)},p(i,a){a&1&&n!==(n=i[5]+"")&&Te(e,n)},d(i){i&&_(t)}}}function gt(s){let t,n=s[0].subimages,e=[];for(let i=0;i<n.length;i+=1)e[i]=dt(pt(s,n,i));return{c(){t=x("div");for(let i=0;i<e.length;i+=1)e[i].c();this.h()},l(i){t=j(i,"DIV",{class:!0});var a=z(t);for(let r=0;r<e.length;r+=1)e[r].l(a);a.forEach(_),this.h()},h(){w(t,"class","grid grid-cols-3 gap-4 md:gap-8 lg:gap-12")},m(i,a){G(i,t,a);for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(t,null)},p(i,a){if(a&3){n=i[0].subimages;let r;for(r=0;r<n.length;r+=1){const o=pt(i,n,r);e[r]?e[r].p(o,a):(e[r]=dt(o),e[r].c(),e[r].m(t,null))}for(;r<e.length;r+=1)e[r].d(1);e.length=n.length}},d(i){i&&_(t),vt(e,i)}}}function dt(s){let t,n,e,i,a,r,o;return{c(){t=x("div"),n=x("a"),e=x("img"),o=B(),this.h()},l(l){t=j(l,"DIV",{class:!0});var c=z(t);n=j(c,"A",{rel:!0,href:!0});var p=z(n);e=j(p,"IMG",{src:!0,alt:!0}),p.forEach(_),o=N(c),c.forEach(_),this.h()},h(){var l,c;ze(e.src,i=(l=s[1][`../../projects/${s[2]}`])==null?void 0:l.default)||w(e,"src",i),w(e,"alt",a=s[0].title+" subimage"),w(n,"rel","external"),w(n,"href",r=(c=s[1][`../../projects/${s[2]}`])==null?void 0:c.default),w(t,"class","col-span-full md:col-span-1")},m(l,c){G(l,t,c),k(t,n),k(n,e),k(t,o)},p(l,c){var p,d;c&3&&!ze(e.src,i=(p=l[1][`../../projects/${l[2]}`])==null?void 0:p.default)&&w(e,"src",i),c&1&&a!==(a=l[0].title+" subimage")&&w(e,"alt",a),c&3&&r!==(r=(d=l[1][`../../projects/${l[2]}`])==null?void 0:d.default)&&w(n,"href",r)},d(l){l&&_(t)}}}function dl(s){let t,n,e=s[0].title+"",i,a,r,o,l,c,p,d,f=s[0].lead+"",u,C,I,D,$,S,M,U,E,L,H,q,te=s[0].topics,A=[];for(let m=0;m<te.length;m+=1)A[m]=ht(ut(s,te,m));I=new gl({props:{source:s[0].content}});let P=s[0].subimages&&gt(s);return{c(){t=x("h3"),n=x("span"),i=J(e),a=B(),r=x("div");for(let m=0;m<A.length;m+=1)A[m].c();o=B(),l=x("div"),c=x("div"),p=x("div"),d=x("p"),u=J(f),C=B(),me(I.$$.fragment),D=B(),$=x("div"),S=x("a"),M=x("img"),H=B(),P&&P.c(),this.h()},l(m){t=j(m,"H3",{class:!0});var R=z(t);n=j(R,"SPAN",{class:!0});var V=z(n);i=Y(V,e),V.forEach(_),R.forEach(_),a=N(m),r=j(m,"DIV",{class:!0});var X=z(r);for(let ae=0;ae<A.length;ae+=1)A[ae].l(X);X.forEach(_),o=N(m),l=j(m,"DIV",{class:!0});var F=z(l);c=j(F,"DIV",{class:!0});var T=z(c);p=j(T,"DIV",{class:!0});var Q=z(p);d=j(Q,"P",{class:!0});var ce=z(d);u=Y(ce,f),ce.forEach(_),C=N(Q),fe(I.$$.fragment,Q),Q.forEach(_),D=N(T),$=j(T,"DIV",{class:!0});var pe=z($);S=j(pe,"A",{rel:!0,href:!0});var ee=z(S);M=j(ee,"IMG",{src:!0,alt:!0}),ee.forEach(_),pe.forEach(_),T.forEach(_),H=N(F),P&&P.l(F),F.forEach(_),this.h()},h(){var m,R;w(n,"class","mr-1"),w(t,"class","text-black text-xl font-semibold mb-2"),w(r,"class","flex flex-wrap mb-1"),w(d,"class","text-lg font-light mb-3"),w(p,"class","col-span-3 md:col-span-2"),ze(M.src,U=(m=s[1][`../../projects/${s[0].image}`])==null?void 0:m.default)||w(M,"src",U),w(M,"alt",E=s[0].title+" preview image"),ge(M,"border",s[0].image_border),w(S,"rel","external"),w(S,"href",L=(R=s[1][`../../projects/${s[0].image}`])==null?void 0:R.default),w($,"class","col-span-3 md:col-span-1"),w(c,"class","grid grid-cols-3 gap-4 md:gap-8 lg:gap-12"),w(l,"class","space-y-4")},m(m,R){G(m,t,R),k(t,n),k(n,i),G(m,a,R),G(m,r,R);for(let V=0;V<A.length;V+=1)A[V]&&A[V].m(r,null);G(m,o,R),G(m,l,R),k(l,c),k(c,p),k(p,d),k(d,u),k(p,C),_e(I,p,null),k(c,D),k(c,$),k($,S),k(S,M),k(l,H),P&&P.m(l,null),q=!0},p(m,[R]){var X,F;if((!q||R&1)&&e!==(e=m[0].title+"")&&Te(i,e),R&1){te=m[0].topics;let T;for(T=0;T<te.length;T+=1){const Q=ut(m,te,T);A[T]?A[T].p(Q,R):(A[T]=ht(Q),A[T].c(),A[T].m(r,null))}for(;T<A.length;T+=1)A[T].d(1);A.length=te.length}(!q||R&1)&&f!==(f=m[0].lead+"")&&Te(u,f);const V={};R&1&&(V.source=m[0].content),I.$set(V),(!q||R&3&&!ze(M.src,U=(X=m[1][`../../projects/${m[0].image}`])==null?void 0:X.default))&&w(M,"src",U),(!q||R&1&&E!==(E=m[0].title+" preview image"))&&w(M,"alt",E),(!q||R&1)&&ge(M,"border",m[0].image_border),(!q||R&3&&L!==(L=(F=m[1][`../../projects/${m[0].image}`])==null?void 0:F.default))&&w(S,"href",L),m[0].subimages?P?P.p(m,R):(P=gt(m),P.c(),P.m(l,null)):P&&(P.d(1),P=null)},i(m){q||(se(I.$$.fragment,m),q=!0)},o(m){oe(I.$$.fragment,m),q=!1},d(m){m&&_(t),m&&_(a),m&&_(r),vt(A,m),m&&_(o),m&&_(l),be(I),P&&P.d()}}}function ml(s,t,n){let{data:e}=t,{images:i}=t;return s.$$set=a=>{"data"in a&&n(0,e=a.data),"images"in a&&n(1,i=a.images)},[e,i]}class fl extends Pe{constructor(t){super(),Le(this,t,ml,dl,Me,{data:0,images:1})}}function mt(s,t,n){const e=s.slice();return e[8]=t[n],e}function ft(s,t,n){const e=s.slice();return e[8]=t[n],e}function _t(s,t){let n,e,i=t[3][t[8]].title+"",a,r,o;return{key:s,first:null,c(){n=x("li"),e=x("a"),a=J(i),o=B(),this.h()},l(l){n=j(l,"LI",{});var c=z(n);e=j(c,"A",{class:!0,href:!0});var p=z(e);a=Y(p,i),p.forEach(_),o=N(c),c.forEach(_),this.h()},h(){w(e,"class","link"),w(e,"href",r="#"+Ie(t[8])),this.first=n},m(l,c){G(l,n,c),k(n,e),k(e,a),k(n,o)},p(l,c){t=l,c&2&&i!==(i=t[3][t[8]].title+"")&&Te(a,i),c&2&&r!==(r="#"+Ie(t[8]))&&w(e,"href",r)},d(l){l&&_(n)}}}function bt(s,t){let n,e,i,a,r,o;return i=new fl({props:{data:t[3][t[8]],images:t[4]}}),{key:s,first:null,c(){n=x("section"),e=x("div"),me(i.$$.fragment),a=B(),this.h()},l(l){n=j(l,"SECTION",{class:!0,id:!0});var c=z(n);e=j(c,"DIV",{class:!0});var p=z(e);fe(i.$$.fragment,p),p.forEach(_),a=N(c),c.forEach(_),this.h()},h(){w(e,"class","mx-auto max-w-[1152px] px-4 sm:px-6"),w(n,"class","py-10"),w(n,"id",r=Ie(t[8])),this.first=n},m(l,c){G(l,n,c),k(n,e),_e(i,e,null),k(n,a),o=!0},p(l,c){t=l;const p={};c&7&&(p.data=t[3][t[8]]),i.$set(p),(!o||c&7&&r!==(r=Ie(t[8])))&&w(n,"id",r)},i(l){o||(se(i.$$.fragment,l),o=!0)},o(l){oe(i.$$.fragment,l),o=!1},d(l){l&&_(n),be(i)}}}function _l(s){let t,n,e,i,a,r,o,l,c,p,d,f,u,C,I,D,$,S,M,U,E,L,H,q,te,A,P,m=[],R=new Map,V,X,F,T,Q,ce,pe,ee,ae,ve,K=[],Ge=new Map,ue,he,De,Ue;t=new Ir({props:{title:"Sohum Sukhatankar – Projects",description:"I just like learning."}});let ke=s[1];const He=h=>h[8];for(let h=0;h<ke.length;h+=1){let y=ft(s,ke,h),W=He(y);R.set(W,m[h]=_t(W,y))}Q=new Ar({props:{size:18,strokeWidth:1.8,class:"mr-1.5"}});let de=s[0]==="date"?s[2]:s[1];const We=h=>h[8];for(let h=0;h<de.length;h+=1){let y=mt(s,de,h),W=We(y);Ge.set(W,K[h]=bt(W,y))}return{c(){me(t.$$.fragment),n=B(),e=x("section"),i=x("h2"),a=J("Open Source"),r=B(),o=x("p"),l=J("I view building software in the open as a mode of "),c=x("em"),p=J("creative exploration"),d=J(`. It lets me quickly act on inspiration, delve into new topics, and make
    tools that improve people's lives.`),f=B(),u=x("p"),C=J("You'll see that I particularly like learning."),I=B(),D=x("p"),$=J(`If you find something interesting,
    `),S=x("a"),M=J("let me know"),U=J("!"),E=B(),L=x("div"),H=x("section"),q=x("h2"),te=J("Table of Contents"),A=B(),P=x("ul");for(let h=0;h<m.length;h+=1)m[h].c();V=B(),X=x("div"),F=x("div"),T=x("button"),me(Q.$$.fragment),ce=J(" by Date"),pe=B(),ee=x("button"),ae=J("by Title"),ve=B();for(let h=0;h<K.length;h+=1)K[h].c();ue=tt(),this.h()},l(h){fe(t.$$.fragment,h),n=N(h),e=j(h,"SECTION",{class:!0});var y=z(e);i=j(y,"H2",{class:!0});var W=z(i);a=Y(W,"Open Source"),W.forEach(_),r=N(y),o=j(y,"P",{class:!0});var we=z(o);l=Y(we,"I view building software in the open as a mode of "),c=j(we,"EM",{class:!0});var Be=z(c);p=Y(Be,"creative exploration"),Be.forEach(_),d=Y(we,`. It lets me quickly act on inspiration, delve into new topics, and make
    tools that improve people's lives.`),we.forEach(_),f=N(y),u=j(y,"P",{class:!0});var Ne=z(u);C=Y(Ne,"You'll see that I particularly like learning."),Ne.forEach(_),I=N(y),D=j(y,"P",{class:!0});var ye=z(D);$=Y(ye,`If you find something interesting,
    `),S=j(ye,"A",{class:!0,href:!0});var Fe=z(S);M=Y(Fe,"let me know"),Fe.forEach(_),U=Y(ye,"!"),ye.forEach(_),y.forEach(_),E=N(h),L=j(h,"DIV",{class:!0});var Ze=z(L);H=j(Ze,"SECTION",{class:!0});var $e=z(H);q=j($e,"H2",{class:!0});var Ve=z(q);te=Y(Ve,"Table of Contents"),Ve.forEach(_),A=N($e),P=j($e,"UL",{class:!0});var Qe=z(P);for(let re=0;re<m.length;re+=1)m[re].l(Qe);Qe.forEach(_),$e.forEach(_),Ze.forEach(_),V=N(h),X=j(h,"DIV",{class:!0});var Ke=z(X);F=j(Ke,"DIV",{class:!0});var xe=z(F);T=j(xe,"BUTTON",{class:!0});var Ae=z(T);fe(Q.$$.fragment,Ae),ce=Y(Ae," by Date"),Ae.forEach(_),pe=N(xe),ee=j(xe,"BUTTON",{class:!0});var Je=z(ee);ae=Y(Je,"by Title"),Je.forEach(_),xe.forEach(_),Ke.forEach(_),ve=N(h);for(let re=0;re<K.length;re+=1)K[re].l(h);ue=tt(),this.h()},h(){w(i,"class","heading2"),w(c,"class","font-serif text-[110%] leading-[100%]"),w(o,"class","text-lg mb-4"),w(u,"class","text-lg mb-4"),w(S,"class","link"),w(S,"href","mailto:tosohum@gmail.com?subject=Software%20Projects"),w(D,"class","text-lg"),w(e,"class","layout-md py-12"),w(q,"class","heading2 text-white"),w(P,"class","sm:columns-2"),w(H,"class","layout-md py-12"),w(L,"class","bg-gray-900 text-neutral-200 dark"),w(T,"class","svelte-1qrsmpk"),ge(T,"active",s[0]==="date"),w(ee,"class","svelte-1qrsmpk"),ge(ee,"active",s[0]==="title"),w(F,"class","flex justify-center space-x-6"),w(X,"class","bg-neutral-50 border-b border-neutral-200 py-4")},m(h,y){_e(t,h,y),G(h,n,y),G(h,e,y),k(e,i),k(i,a),k(e,r),k(e,o),k(o,l),k(o,c),k(c,p),k(o,d),k(e,f),k(e,u),k(u,C),k(e,I),k(e,D),k(D,$),k(D,S),k(S,M),k(D,U),G(h,E,y),G(h,L,y),k(L,H),k(H,q),k(q,te),k(H,A),k(H,P);for(let W=0;W<m.length;W+=1)m[W]&&m[W].m(P,null);G(h,V,y),G(h,X,y),k(X,F),k(F,T),_e(Q,T,null),k(T,ce),k(F,pe),k(F,ee),k(ee,ae),G(h,ve,y);for(let W=0;W<K.length;W+=1)K[W]&&K[W].m(h,y);G(h,ue,y),he=!0,De||(Ue=[nt(T,"click",s[5]),nt(ee,"click",s[6])],De=!0)},p(h,[y]){y&10&&(ke=h[1],m=it(m,y,He,1,h,ke,R,P,Sr,_t,null,ft)),(!he||y&1)&&ge(T,"active",h[0]==="date"),(!he||y&1)&&ge(ee,"active",h[0]==="title"),y&31&&(de=h[0]==="date"?h[2]:h[1],zr(),K=it(K,y,We,1,h,de,Ge,ue.parentNode,Tr,bt,ue,mt),yr())},i(h){if(!he){se(t.$$.fragment,h),se(Q.$$.fragment,h);for(let y=0;y<de.length;y+=1)se(K[y]);he=!0}},o(h){oe(t.$$.fragment,h),oe(Q.$$.fragment,h);for(let y=0;y<K.length;y+=1)oe(K[y]);he=!1},d(h){be(t,h),h&&_(n),h&&_(e),h&&_(E),h&&_(L);for(let y=0;y<m.length;y+=1)m[y].d();h&&_(V),h&&_(X),be(Q),h&&_(ve);for(let y=0;y<K.length;y+=1)K[y].d(h);h&&_(ue),De=!1,$r(Ue)}}}function Ie(s){var t;return(t=s.match(/\.\.\/projects\/(.*)\.md$/))==null?void 0:t[1]}function bl(s,t,n){let e,i,a;xr(s,Or,d=>n(7,a=d));const r=Object.assign({"../../projects/bore.md":Er,"../../projects/char-rnn-keras.md":Gr,"../../projects/classes-wtf.md":Hr,"../../projects/composing-studio.md":Br,"../../projects/crepe.md":Fr,"../../projects/dispict.md":Vr,"../../projects/fastseg.md":Kr,"../../projects/game-of-life.md":Yr,"../../projects/graphics-workshop.md":es,"../../projects/gravity.md":ns,"../../projects/harmony.md":as,"../../projects/inline-sql.md":ss,"../../projects/julia-fractal.md":ls,"../../projects/langevin-music.md":ps,"../../projects/library.md":hs,"../../projects/percival.md":ds,"../../projects/poincare-map.md":fs,"../../projects/redis-rope.md":bs,"../../projects/rpt.md":ks,"../../projects/rushlight.md":ys,"../../projects/rustpad.md":xs,"../../projects/setwithfriends.md":Ss,"../../projects/sketching.md":Ts,"../../projects/sshx.md":Rs,"../../projects/triangulate.md":Ps,"../../projects/ukanren-rs.md":Ms,"../../projects/vae-cnn-mnist.md":As,"../../projects/wkspace.md":Es}),o=Object.assign({"../../projects/bore.png":Gs,"../../projects/char-rnn-keras.png":Hs,"../../projects/classes-wtf.png":Bs,"../../projects/composing-studio.png":Fs,"../../projects/crepe.png":Vs,"../../projects/dispict.jpg":Ks,"../../projects/fastseg.jpg":Ys,"../../projects/game-of-life.png":eo,"../../projects/graphics-workshop.png":no,"../../projects/gravity.png":ao,"../../projects/harmony.png":so,"../../projects/inline-sql.png":lo,"../../projects/julia-1.jpg":po,"../../projects/julia-2.jpg":ho,"../../projects/julia-3.jpg":mo,"../../projects/julia-4.jpg":_o,"../../projects/langevin-music.png":vo,"../../projects/library.png":wo,"../../projects/percival.png":$o,"../../projects/poincare-map.png":jo,"../../projects/redis-rope.svg":zo,"../../projects/rpt.jpg":Oo,"../../projects/rushlight.jpg":Io,"../../projects/rustpad.png":Lo,"../../projects/setwithfriends.png":Do,"../../projects/sketching.png":Co,"../../projects/sshx.png":qo,"../../projects/triangulate.png":Uo,"../../projects/ukanren-rs.png":Wo,"../../projects/vae-cnn-mnist.png":No,"../../projects/wkspace.png":Zo});jr(()=>{const d=a.url.hash.slice(1);d&&setTimeout(()=>{var f;a.url.hash.slice(1)===d&&((f=document.getElementById(d))==null||f.scrollIntoView())},500)});let l="date";const c=()=>n(0,l="date"),p=()=>n(0,l="title");return n(2,e=Object.keys(r).sort((d,f)=>r[f].date-r[d].date)),n(1,i=Object.keys(r).sort((d,f)=>{const u=r[d].title.toLowerCase(),C=r[f].title.toLowerCase();return u<C?-1:u>C?1:0})),[l,i,e,r,o,c,p]}class xl extends Pe{constructor(t){super(),Le(this,t,bl,_l,Me,{})}}export{xl as default};
