import{S as e,i as o,s as c,k as S,q as H,a as d,l as I,m as O,r as J,h as k,c as x0,n as b,b as C0,G as g,u as W,B as z}from"../../chunks/index-1664d19c.js";var R={},B0={get exports(){return R},set exports(f){R=f}};(function(f){function a(){var r=0,t=1,i=2,n=3,E=4,l=5,u=6,s=7,v=8,m=9,_=10,K=11,L=12,P=13,y=14,T=15,w=16,G=17,h=0,V=1,M=2,Q=3,U=4;function X(x,C){return 55296<=x.charCodeAt(C)&&x.charCodeAt(C)<=56319&&56320<=x.charCodeAt(C+1)&&x.charCodeAt(C+1)<=57343}function N(x,C){C===void 0&&(C=0);var A=x.charCodeAt(C);if(55296<=A&&A<=56319&&C<x.length-1){var B=A,D=x.charCodeAt(C+1);return 56320<=D&&D<=57343?(B-55296)*1024+(D-56320)+65536:B}if(56320<=A&&A<=57343&&C>=1){var B=x.charCodeAt(C-1),D=A;return 55296<=B&&B<=56319?(B-55296)*1024+(D-56320)+65536:D}return A}function Y(x,C,A){var B=[x].concat(C).concat([A]),D=B[B.length-2],F=A,q=B.lastIndexOf(y);if(q>1&&B.slice(1,q).every(function(p){return p==n})&&[n,P,G].indexOf(x)==-1)return M;var $=B.lastIndexOf(E);if($>0&&B.slice(1,$).every(function(p){return p==E})&&[L,E].indexOf(D)==-1)return B.filter(function(p){return p==E}).length%2==1?Q:U;if(D==r&&F==t)return h;if(D==i||D==r||D==t)return F==y&&C.every(function(p){return p==n})?M:V;if(F==i||F==r||F==t)return V;if(D==u&&(F==u||F==s||F==m||F==_))return h;if((D==m||D==s)&&(F==s||F==v))return h;if((D==_||D==v)&&F==v)return h;if(F==n||F==T)return h;if(F==l)return h;if(D==L)return h;var j=B.indexOf(n)!=-1?B.lastIndexOf(n)-1:B.length-2;return[P,G].indexOf(B[j])!=-1&&B.slice(j+1,-1).every(function(p){return p==n})&&F==y||D==T&&[w,G].indexOf(F)!=-1?h:C.indexOf(E)!=-1?M:D==E&&F==E?h:V}this.nextBreak=function(x,C){if(C===void 0&&(C=0),C<0)return 0;if(C>=x.length-1)return x.length;for(var A=Z(N(x,C)),B=[],D=C+1;D<x.length;D++)if(!X(x,D-1)){var F=Z(N(x,D));if(Y(A,B,F))return D;B.push(F)}return x.length},this.splitGraphemes=function(x){for(var C=[],A=0,B;(B=this.nextBreak(x,A))<x.length;)C.push(x.slice(A,B)),A=B;return A<x.length&&C.push(x.slice(A)),C},this.iterateGraphemes=function(x){var C=0,A={next:function(){var B,D;return(D=this.nextBreak(x,C))<x.length?(B=x.slice(C,D),C=D,{value:B,done:!1}):C<x.length?(B=x.slice(C),C=x.length,{value:B,done:!1}):{value:void 0,done:!0}}.bind(this)};return typeof Symbol<"u"&&Symbol.iterator&&(A[Symbol.iterator]=function(){return A}),A},this.countGraphemes=function(x){for(var C=0,A=0,B;(B=this.nextBreak(x,A))<x.length;)A=B,C++;return A<x.length&&C++,C};function Z(x){return 1536<=x&&x<=1541||x==1757||x==1807||x==2274||x==3406||x==69821||70082<=x&&x<=70083||x==72250||72326<=x&&x<=72329||x==73030?L:x==13?r:x==10?t:0<=x&&x<=9||11<=x&&x<=12||14<=x&&x<=31||127<=x&&x<=159||x==173||x==1564||x==6158||x==8203||8206<=x&&x<=8207||x==8232||x==8233||8234<=x&&x<=8238||8288<=x&&x<=8292||x==8293||8294<=x&&x<=8303||55296<=x&&x<=57343||x==65279||65520<=x&&x<=65528||65529<=x&&x<=65531||113824<=x&&x<=113827||119155<=x&&x<=119162||x==917504||x==917505||917506<=x&&x<=917535||917632<=x&&x<=917759||918e3<=x&&x<=921599?i:768<=x&&x<=879||1155<=x&&x<=1159||1160<=x&&x<=1161||1425<=x&&x<=1469||x==1471||1473<=x&&x<=1474||1476<=x&&x<=1477||x==1479||1552<=x&&x<=1562||1611<=x&&x<=1631||x==1648||1750<=x&&x<=1756||1759<=x&&x<=1764||1767<=x&&x<=1768||1770<=x&&x<=1773||x==1809||1840<=x&&x<=1866||1958<=x&&x<=1968||2027<=x&&x<=2035||2070<=x&&x<=2073||2075<=x&&x<=2083||2085<=x&&x<=2087||2089<=x&&x<=2093||2137<=x&&x<=2139||2260<=x&&x<=2273||2275<=x&&x<=2306||x==2362||x==2364||2369<=x&&x<=2376||x==2381||2385<=x&&x<=2391||2402<=x&&x<=2403||x==2433||x==2492||x==2494||2497<=x&&x<=2500||x==2509||x==2519||2530<=x&&x<=2531||2561<=x&&x<=2562||x==2620||2625<=x&&x<=2626||2631<=x&&x<=2632||2635<=x&&x<=2637||x==2641||2672<=x&&x<=2673||x==2677||2689<=x&&x<=2690||x==2748||2753<=x&&x<=2757||2759<=x&&x<=2760||x==2765||2786<=x&&x<=2787||2810<=x&&x<=2815||x==2817||x==2876||x==2878||x==2879||2881<=x&&x<=2884||x==2893||x==2902||x==2903||2914<=x&&x<=2915||x==2946||x==3006||x==3008||x==3021||x==3031||x==3072||3134<=x&&x<=3136||3142<=x&&x<=3144||3146<=x&&x<=3149||3157<=x&&x<=3158||3170<=x&&x<=3171||x==3201||x==3260||x==3263||x==3266||x==3270||3276<=x&&x<=3277||3285<=x&&x<=3286||3298<=x&&x<=3299||3328<=x&&x<=3329||3387<=x&&x<=3388||x==3390||3393<=x&&x<=3396||x==3405||x==3415||3426<=x&&x<=3427||x==3530||x==3535||3538<=x&&x<=3540||x==3542||x==3551||x==3633||3636<=x&&x<=3642||3655<=x&&x<=3662||x==3761||3764<=x&&x<=3769||3771<=x&&x<=3772||3784<=x&&x<=3789||3864<=x&&x<=3865||x==3893||x==3895||x==3897||3953<=x&&x<=3966||3968<=x&&x<=3972||3974<=x&&x<=3975||3981<=x&&x<=3991||3993<=x&&x<=4028||x==4038||4141<=x&&x<=4144||4146<=x&&x<=4151||4153<=x&&x<=4154||4157<=x&&x<=4158||4184<=x&&x<=4185||4190<=x&&x<=4192||4209<=x&&x<=4212||x==4226||4229<=x&&x<=4230||x==4237||x==4253||4957<=x&&x<=4959||5906<=x&&x<=5908||5938<=x&&x<=5940||5970<=x&&x<=5971||6002<=x&&x<=6003||6068<=x&&x<=6069||6071<=x&&x<=6077||x==6086||6089<=x&&x<=6099||x==6109||6155<=x&&x<=6157||6277<=x&&x<=6278||x==6313||6432<=x&&x<=6434||6439<=x&&x<=6440||x==6450||6457<=x&&x<=6459||6679<=x&&x<=6680||x==6683||x==6742||6744<=x&&x<=6750||x==6752||x==6754||6757<=x&&x<=6764||6771<=x&&x<=6780||x==6783||6832<=x&&x<=6845||x==6846||6912<=x&&x<=6915||x==6964||6966<=x&&x<=6970||x==6972||x==6978||7019<=x&&x<=7027||7040<=x&&x<=7041||7074<=x&&x<=7077||7080<=x&&x<=7081||7083<=x&&x<=7085||x==7142||7144<=x&&x<=7145||x==7149||7151<=x&&x<=7153||7212<=x&&x<=7219||7222<=x&&x<=7223||7376<=x&&x<=7378||7380<=x&&x<=7392||7394<=x&&x<=7400||x==7405||x==7412||7416<=x&&x<=7417||7616<=x&&x<=7673||7675<=x&&x<=7679||x==8204||8400<=x&&x<=8412||8413<=x&&x<=8416||x==8417||8418<=x&&x<=8420||8421<=x&&x<=8432||11503<=x&&x<=11505||x==11647||11744<=x&&x<=11775||12330<=x&&x<=12333||12334<=x&&x<=12335||12441<=x&&x<=12442||x==42607||42608<=x&&x<=42610||42612<=x&&x<=42621||42654<=x&&x<=42655||42736<=x&&x<=42737||x==43010||x==43014||x==43019||43045<=x&&x<=43046||43204<=x&&x<=43205||43232<=x&&x<=43249||43302<=x&&x<=43309||43335<=x&&x<=43345||43392<=x&&x<=43394||x==43443||43446<=x&&x<=43449||x==43452||x==43493||43561<=x&&x<=43566||43569<=x&&x<=43570||43573<=x&&x<=43574||x==43587||x==43596||x==43644||x==43696||43698<=x&&x<=43700||43703<=x&&x<=43704||43710<=x&&x<=43711||x==43713||43756<=x&&x<=43757||x==43766||x==44005||x==44008||x==44013||x==64286||65024<=x&&x<=65039||65056<=x&&x<=65071||65438<=x&&x<=65439||x==66045||x==66272||66422<=x&&x<=66426||68097<=x&&x<=68099||68101<=x&&x<=68102||68108<=x&&x<=68111||68152<=x&&x<=68154||x==68159||68325<=x&&x<=68326||x==69633||69688<=x&&x<=69702||69759<=x&&x<=69761||69811<=x&&x<=69814||69817<=x&&x<=69818||69888<=x&&x<=69890||69927<=x&&x<=69931||69933<=x&&x<=69940||x==70003||70016<=x&&x<=70017||70070<=x&&x<=70078||70090<=x&&x<=70092||70191<=x&&x<=70193||x==70196||70198<=x&&x<=70199||x==70206||x==70367||70371<=x&&x<=70378||70400<=x&&x<=70401||x==70460||x==70462||x==70464||x==70487||70502<=x&&x<=70508||70512<=x&&x<=70516||70712<=x&&x<=70719||70722<=x&&x<=70724||x==70726||x==70832||70835<=x&&x<=70840||x==70842||x==70845||70847<=x&&x<=70848||70850<=x&&x<=70851||x==71087||71090<=x&&x<=71093||71100<=x&&x<=71101||71103<=x&&x<=71104||71132<=x&&x<=71133||71219<=x&&x<=71226||x==71229||71231<=x&&x<=71232||x==71339||x==71341||71344<=x&&x<=71349||x==71351||71453<=x&&x<=71455||71458<=x&&x<=71461||71463<=x&&x<=71467||72193<=x&&x<=72198||72201<=x&&x<=72202||72243<=x&&x<=72248||72251<=x&&x<=72254||x==72263||72273<=x&&x<=72278||72281<=x&&x<=72283||72330<=x&&x<=72342||72344<=x&&x<=72345||72752<=x&&x<=72758||72760<=x&&x<=72765||x==72767||72850<=x&&x<=72871||72874<=x&&x<=72880||72882<=x&&x<=72883||72885<=x&&x<=72886||73009<=x&&x<=73014||x==73018||73020<=x&&x<=73021||73023<=x&&x<=73029||x==73031||92912<=x&&x<=92916||92976<=x&&x<=92982||94095<=x&&x<=94098||113821<=x&&x<=113822||x==119141||119143<=x&&x<=119145||119150<=x&&x<=119154||119163<=x&&x<=119170||119173<=x&&x<=119179||119210<=x&&x<=119213||119362<=x&&x<=119364||121344<=x&&x<=121398||121403<=x&&x<=121452||x==121461||x==121476||121499<=x&&x<=121503||121505<=x&&x<=121519||122880<=x&&x<=122886||122888<=x&&x<=122904||122907<=x&&x<=122913||122915<=x&&x<=122916||122918<=x&&x<=122922||125136<=x&&x<=125142||125252<=x&&x<=125258||917536<=x&&x<=917631||917760<=x&&x<=917999?n:127462<=x&&x<=127487?E:x==2307||x==2363||2366<=x&&x<=2368||2377<=x&&x<=2380||2382<=x&&x<=2383||2434<=x&&x<=2435||2495<=x&&x<=2496||2503<=x&&x<=2504||2507<=x&&x<=2508||x==2563||2622<=x&&x<=2624||x==2691||2750<=x&&x<=2752||x==2761||2763<=x&&x<=2764||2818<=x&&x<=2819||x==2880||2887<=x&&x<=2888||2891<=x&&x<=2892||x==3007||3009<=x&&x<=3010||3014<=x&&x<=3016||3018<=x&&x<=3020||3073<=x&&x<=3075||3137<=x&&x<=3140||3202<=x&&x<=3203||x==3262||3264<=x&&x<=3265||3267<=x&&x<=3268||3271<=x&&x<=3272||3274<=x&&x<=3275||3330<=x&&x<=3331||3391<=x&&x<=3392||3398<=x&&x<=3400||3402<=x&&x<=3404||3458<=x&&x<=3459||3536<=x&&x<=3537||3544<=x&&x<=3550||3570<=x&&x<=3571||x==3635||x==3763||3902<=x&&x<=3903||x==3967||x==4145||4155<=x&&x<=4156||4182<=x&&x<=4183||x==4228||x==6070||6078<=x&&x<=6085||6087<=x&&x<=6088||6435<=x&&x<=6438||6441<=x&&x<=6443||6448<=x&&x<=6449||6451<=x&&x<=6456||6681<=x&&x<=6682||x==6741||x==6743||6765<=x&&x<=6770||x==6916||x==6965||x==6971||6973<=x&&x<=6977||6979<=x&&x<=6980||x==7042||x==7073||7078<=x&&x<=7079||x==7082||x==7143||7146<=x&&x<=7148||x==7150||7154<=x&&x<=7155||7204<=x&&x<=7211||7220<=x&&x<=7221||x==7393||7410<=x&&x<=7411||x==7415||43043<=x&&x<=43044||x==43047||43136<=x&&x<=43137||43188<=x&&x<=43203||43346<=x&&x<=43347||x==43395||43444<=x&&x<=43445||43450<=x&&x<=43451||43453<=x&&x<=43456||43567<=x&&x<=43568||43571<=x&&x<=43572||x==43597||x==43755||43758<=x&&x<=43759||x==43765||44003<=x&&x<=44004||44006<=x&&x<=44007||44009<=x&&x<=44010||x==44012||x==69632||x==69634||x==69762||69808<=x&&x<=69810||69815<=x&&x<=69816||x==69932||x==70018||70067<=x&&x<=70069||70079<=x&&x<=70080||70188<=x&&x<=70190||70194<=x&&x<=70195||x==70197||70368<=x&&x<=70370||70402<=x&&x<=70403||x==70463||70465<=x&&x<=70468||70471<=x&&x<=70472||70475<=x&&x<=70477||70498<=x&&x<=70499||70709<=x&&x<=70711||70720<=x&&x<=70721||x==70725||70833<=x&&x<=70834||x==70841||70843<=x&&x<=70844||x==70846||x==70849||71088<=x&&x<=71089||71096<=x&&x<=71099||x==71102||71216<=x&&x<=71218||71227<=x&&x<=71228||x==71230||x==71340||71342<=x&&x<=71343||x==71350||71456<=x&&x<=71457||x==71462||72199<=x&&x<=72200||x==72249||72279<=x&&x<=72280||x==72343||x==72751||x==72766||x==72873||x==72881||x==72884||94033<=x&&x<=94078||x==119142||x==119149?l:4352<=x&&x<=4447||43360<=x&&x<=43388?u:4448<=x&&x<=4519||55216<=x&&x<=55238?s:4520<=x&&x<=4607||55243<=x&&x<=55291?v:x==44032||x==44060||x==44088||x==44116||x==44144||x==44172||x==44200||x==44228||x==44256||x==44284||x==44312||x==44340||x==44368||x==44396||x==44424||x==44452||x==44480||x==44508||x==44536||x==44564||x==44592||x==44620||x==44648||x==44676||x==44704||x==44732||x==44760||x==44788||x==44816||x==44844||x==44872||x==44900||x==44928||x==44956||x==44984||x==45012||x==45040||x==45068||x==45096||x==45124||x==45152||x==45180||x==45208||x==45236||x==45264||x==45292||x==45320||x==45348||x==45376||x==45404||x==45432||x==45460||x==45488||x==45516||x==45544||x==45572||x==45600||x==45628||x==45656||x==45684||x==45712||x==45740||x==45768||x==45796||x==45824||x==45852||x==45880||x==45908||x==45936||x==45964||x==45992||x==46020||x==46048||x==46076||x==46104||x==46132||x==46160||x==46188||x==46216||x==46244||x==46272||x==46300||x==46328||x==46356||x==46384||x==46412||x==46440||x==46468||x==46496||x==46524||x==46552||x==46580||x==46608||x==46636||x==46664||x==46692||x==46720||x==46748||x==46776||x==46804||x==46832||x==46860||x==46888||x==46916||x==46944||x==46972||x==47e3||x==47028||x==47056||x==47084||x==47112||x==47140||x==47168||x==47196||x==47224||x==47252||x==47280||x==47308||x==47336||x==47364||x==47392||x==47420||x==47448||x==47476||x==47504||x==47532||x==47560||x==47588||x==47616||x==47644||x==47672||x==47700||x==47728||x==47756||x==47784||x==47812||x==47840||x==47868||x==47896||x==47924||x==47952||x==47980||x==48008||x==48036||x==48064||x==48092||x==48120||x==48148||x==48176||x==48204||x==48232||x==48260||x==48288||x==48316||x==48344||x==48372||x==48400||x==48428||x==48456||x==48484||x==48512||x==48540||x==48568||x==48596||x==48624||x==48652||x==48680||x==48708||x==48736||x==48764||x==48792||x==48820||x==48848||x==48876||x==48904||x==48932||x==48960||x==48988||x==49016||x==49044||x==49072||x==49100||x==49128||x==49156||x==49184||x==49212||x==49240||x==49268||x==49296||x==49324||x==49352||x==49380||x==49408||x==49436||x==49464||x==49492||x==49520||x==49548||x==49576||x==49604||x==49632||x==49660||x==49688||x==49716||x==49744||x==49772||x==49800||x==49828||x==49856||x==49884||x==49912||x==49940||x==49968||x==49996||x==50024||x==50052||x==50080||x==50108||x==50136||x==50164||x==50192||x==50220||x==50248||x==50276||x==50304||x==50332||x==50360||x==50388||x==50416||x==50444||x==50472||x==50500||x==50528||x==50556||x==50584||x==50612||x==50640||x==50668||x==50696||x==50724||x==50752||x==50780||x==50808||x==50836||x==50864||x==50892||x==50920||x==50948||x==50976||x==51004||x==51032||x==51060||x==51088||x==51116||x==51144||x==51172||x==51200||x==51228||x==51256||x==51284||x==51312||x==51340||x==51368||x==51396||x==51424||x==51452||x==51480||x==51508||x==51536||x==51564||x==51592||x==51620||x==51648||x==51676||x==51704||x==51732||x==51760||x==51788||x==51816||x==51844||x==51872||x==51900||x==51928||x==51956||x==51984||x==52012||x==52040||x==52068||x==52096||x==52124||x==52152||x==52180||x==52208||x==52236||x==52264||x==52292||x==52320||x==52348||x==52376||x==52404||x==52432||x==52460||x==52488||x==52516||x==52544||x==52572||x==52600||x==52628||x==52656||x==52684||x==52712||x==52740||x==52768||x==52796||x==52824||x==52852||x==52880||x==52908||x==52936||x==52964||x==52992||x==53020||x==53048||x==53076||x==53104||x==53132||x==53160||x==53188||x==53216||x==53244||x==53272||x==53300||x==53328||x==53356||x==53384||x==53412||x==53440||x==53468||x==53496||x==53524||x==53552||x==53580||x==53608||x==53636||x==53664||x==53692||x==53720||x==53748||x==53776||x==53804||x==53832||x==53860||x==53888||x==53916||x==53944||x==53972||x==54e3||x==54028||x==54056||x==54084||x==54112||x==54140||x==54168||x==54196||x==54224||x==54252||x==54280||x==54308||x==54336||x==54364||x==54392||x==54420||x==54448||x==54476||x==54504||x==54532||x==54560||x==54588||x==54616||x==54644||x==54672||x==54700||x==54728||x==54756||x==54784||x==54812||x==54840||x==54868||x==54896||x==54924||x==54952||x==54980||x==55008||x==55036||x==55064||x==55092||x==55120||x==55148||x==55176?m:44033<=x&&x<=44059||44061<=x&&x<=44087||44089<=x&&x<=44115||44117<=x&&x<=44143||44145<=x&&x<=44171||44173<=x&&x<=44199||44201<=x&&x<=44227||44229<=x&&x<=44255||44257<=x&&x<=44283||44285<=x&&x<=44311||44313<=x&&x<=44339||44341<=x&&x<=44367||44369<=x&&x<=44395||44397<=x&&x<=44423||44425<=x&&x<=44451||44453<=x&&x<=44479||44481<=x&&x<=44507||44509<=x&&x<=44535||44537<=x&&x<=44563||44565<=x&&x<=44591||44593<=x&&x<=44619||44621<=x&&x<=44647||44649<=x&&x<=44675||44677<=x&&x<=44703||44705<=x&&x<=44731||44733<=x&&x<=44759||44761<=x&&x<=44787||44789<=x&&x<=44815||44817<=x&&x<=44843||44845<=x&&x<=44871||44873<=x&&x<=44899||44901<=x&&x<=44927||44929<=x&&x<=44955||44957<=x&&x<=44983||44985<=x&&x<=45011||45013<=x&&x<=45039||45041<=x&&x<=45067||45069<=x&&x<=45095||45097<=x&&x<=45123||45125<=x&&x<=45151||45153<=x&&x<=45179||45181<=x&&x<=45207||45209<=x&&x<=45235||45237<=x&&x<=45263||45265<=x&&x<=45291||45293<=x&&x<=45319||45321<=x&&x<=45347||45349<=x&&x<=45375||45377<=x&&x<=45403||45405<=x&&x<=45431||45433<=x&&x<=45459||45461<=x&&x<=45487||45489<=x&&x<=45515||45517<=x&&x<=45543||45545<=x&&x<=45571||45573<=x&&x<=45599||45601<=x&&x<=45627||45629<=x&&x<=45655||45657<=x&&x<=45683||45685<=x&&x<=45711||45713<=x&&x<=45739||45741<=x&&x<=45767||45769<=x&&x<=45795||45797<=x&&x<=45823||45825<=x&&x<=45851||45853<=x&&x<=45879||45881<=x&&x<=45907||45909<=x&&x<=45935||45937<=x&&x<=45963||45965<=x&&x<=45991||45993<=x&&x<=46019||46021<=x&&x<=46047||46049<=x&&x<=46075||46077<=x&&x<=46103||46105<=x&&x<=46131||46133<=x&&x<=46159||46161<=x&&x<=46187||46189<=x&&x<=46215||46217<=x&&x<=46243||46245<=x&&x<=46271||46273<=x&&x<=46299||46301<=x&&x<=46327||46329<=x&&x<=46355||46357<=x&&x<=46383||46385<=x&&x<=46411||46413<=x&&x<=46439||46441<=x&&x<=46467||46469<=x&&x<=46495||46497<=x&&x<=46523||46525<=x&&x<=46551||46553<=x&&x<=46579||46581<=x&&x<=46607||46609<=x&&x<=46635||46637<=x&&x<=46663||46665<=x&&x<=46691||46693<=x&&x<=46719||46721<=x&&x<=46747||46749<=x&&x<=46775||46777<=x&&x<=46803||46805<=x&&x<=46831||46833<=x&&x<=46859||46861<=x&&x<=46887||46889<=x&&x<=46915||46917<=x&&x<=46943||46945<=x&&x<=46971||46973<=x&&x<=46999||47001<=x&&x<=47027||47029<=x&&x<=47055||47057<=x&&x<=47083||47085<=x&&x<=47111||47113<=x&&x<=47139||47141<=x&&x<=47167||47169<=x&&x<=47195||47197<=x&&x<=47223||47225<=x&&x<=47251||47253<=x&&x<=47279||47281<=x&&x<=47307||47309<=x&&x<=47335||47337<=x&&x<=47363||47365<=x&&x<=47391||47393<=x&&x<=47419||47421<=x&&x<=47447||47449<=x&&x<=47475||47477<=x&&x<=47503||47505<=x&&x<=47531||47533<=x&&x<=47559||47561<=x&&x<=47587||47589<=x&&x<=47615||47617<=x&&x<=47643||47645<=x&&x<=47671||47673<=x&&x<=47699||47701<=x&&x<=47727||47729<=x&&x<=47755||47757<=x&&x<=47783||47785<=x&&x<=47811||47813<=x&&x<=47839||47841<=x&&x<=47867||47869<=x&&x<=47895||47897<=x&&x<=47923||47925<=x&&x<=47951||47953<=x&&x<=47979||47981<=x&&x<=48007||48009<=x&&x<=48035||48037<=x&&x<=48063||48065<=x&&x<=48091||48093<=x&&x<=48119||48121<=x&&x<=48147||48149<=x&&x<=48175||48177<=x&&x<=48203||48205<=x&&x<=48231||48233<=x&&x<=48259||48261<=x&&x<=48287||48289<=x&&x<=48315||48317<=x&&x<=48343||48345<=x&&x<=48371||48373<=x&&x<=48399||48401<=x&&x<=48427||48429<=x&&x<=48455||48457<=x&&x<=48483||48485<=x&&x<=48511||48513<=x&&x<=48539||48541<=x&&x<=48567||48569<=x&&x<=48595||48597<=x&&x<=48623||48625<=x&&x<=48651||48653<=x&&x<=48679||48681<=x&&x<=48707||48709<=x&&x<=48735||48737<=x&&x<=48763||48765<=x&&x<=48791||48793<=x&&x<=48819||48821<=x&&x<=48847||48849<=x&&x<=48875||48877<=x&&x<=48903||48905<=x&&x<=48931||48933<=x&&x<=48959||48961<=x&&x<=48987||48989<=x&&x<=49015||49017<=x&&x<=49043||49045<=x&&x<=49071||49073<=x&&x<=49099||49101<=x&&x<=49127||49129<=x&&x<=49155||49157<=x&&x<=49183||49185<=x&&x<=49211||49213<=x&&x<=49239||49241<=x&&x<=49267||49269<=x&&x<=49295||49297<=x&&x<=49323||49325<=x&&x<=49351||49353<=x&&x<=49379||49381<=x&&x<=49407||49409<=x&&x<=49435||49437<=x&&x<=49463||49465<=x&&x<=49491||49493<=x&&x<=49519||49521<=x&&x<=49547||49549<=x&&x<=49575||49577<=x&&x<=49603||49605<=x&&x<=49631||49633<=x&&x<=49659||49661<=x&&x<=49687||49689<=x&&x<=49715||49717<=x&&x<=49743||49745<=x&&x<=49771||49773<=x&&x<=49799||49801<=x&&x<=49827||49829<=x&&x<=49855||49857<=x&&x<=49883||49885<=x&&x<=49911||49913<=x&&x<=49939||49941<=x&&x<=49967||49969<=x&&x<=49995||49997<=x&&x<=50023||50025<=x&&x<=50051||50053<=x&&x<=50079||50081<=x&&x<=50107||50109<=x&&x<=50135||50137<=x&&x<=50163||50165<=x&&x<=50191||50193<=x&&x<=50219||50221<=x&&x<=50247||50249<=x&&x<=50275||50277<=x&&x<=50303||50305<=x&&x<=50331||50333<=x&&x<=50359||50361<=x&&x<=50387||50389<=x&&x<=50415||50417<=x&&x<=50443||50445<=x&&x<=50471||50473<=x&&x<=50499||50501<=x&&x<=50527||50529<=x&&x<=50555||50557<=x&&x<=50583||50585<=x&&x<=50611||50613<=x&&x<=50639||50641<=x&&x<=50667||50669<=x&&x<=50695||50697<=x&&x<=50723||50725<=x&&x<=50751||50753<=x&&x<=50779||50781<=x&&x<=50807||50809<=x&&x<=50835||50837<=x&&x<=50863||50865<=x&&x<=50891||50893<=x&&x<=50919||50921<=x&&x<=50947||50949<=x&&x<=50975||50977<=x&&x<=51003||51005<=x&&x<=51031||51033<=x&&x<=51059||51061<=x&&x<=51087||51089<=x&&x<=51115||51117<=x&&x<=51143||51145<=x&&x<=51171||51173<=x&&x<=51199||51201<=x&&x<=51227||51229<=x&&x<=51255||51257<=x&&x<=51283||51285<=x&&x<=51311||51313<=x&&x<=51339||51341<=x&&x<=51367||51369<=x&&x<=51395||51397<=x&&x<=51423||51425<=x&&x<=51451||51453<=x&&x<=51479||51481<=x&&x<=51507||51509<=x&&x<=51535||51537<=x&&x<=51563||51565<=x&&x<=51591||51593<=x&&x<=51619||51621<=x&&x<=51647||51649<=x&&x<=51675||51677<=x&&x<=51703||51705<=x&&x<=51731||51733<=x&&x<=51759||51761<=x&&x<=51787||51789<=x&&x<=51815||51817<=x&&x<=51843||51845<=x&&x<=51871||51873<=x&&x<=51899||51901<=x&&x<=51927||51929<=x&&x<=51955||51957<=x&&x<=51983||51985<=x&&x<=52011||52013<=x&&x<=52039||52041<=x&&x<=52067||52069<=x&&x<=52095||52097<=x&&x<=52123||52125<=x&&x<=52151||52153<=x&&x<=52179||52181<=x&&x<=52207||52209<=x&&x<=52235||52237<=x&&x<=52263||52265<=x&&x<=52291||52293<=x&&x<=52319||52321<=x&&x<=52347||52349<=x&&x<=52375||52377<=x&&x<=52403||52405<=x&&x<=52431||52433<=x&&x<=52459||52461<=x&&x<=52487||52489<=x&&x<=52515||52517<=x&&x<=52543||52545<=x&&x<=52571||52573<=x&&x<=52599||52601<=x&&x<=52627||52629<=x&&x<=52655||52657<=x&&x<=52683||52685<=x&&x<=52711||52713<=x&&x<=52739||52741<=x&&x<=52767||52769<=x&&x<=52795||52797<=x&&x<=52823||52825<=x&&x<=52851||52853<=x&&x<=52879||52881<=x&&x<=52907||52909<=x&&x<=52935||52937<=x&&x<=52963||52965<=x&&x<=52991||52993<=x&&x<=53019||53021<=x&&x<=53047||53049<=x&&x<=53075||53077<=x&&x<=53103||53105<=x&&x<=53131||53133<=x&&x<=53159||53161<=x&&x<=53187||53189<=x&&x<=53215||53217<=x&&x<=53243||53245<=x&&x<=53271||53273<=x&&x<=53299||53301<=x&&x<=53327||53329<=x&&x<=53355||53357<=x&&x<=53383||53385<=x&&x<=53411||53413<=x&&x<=53439||53441<=x&&x<=53467||53469<=x&&x<=53495||53497<=x&&x<=53523||53525<=x&&x<=53551||53553<=x&&x<=53579||53581<=x&&x<=53607||53609<=x&&x<=53635||53637<=x&&x<=53663||53665<=x&&x<=53691||53693<=x&&x<=53719||53721<=x&&x<=53747||53749<=x&&x<=53775||53777<=x&&x<=53803||53805<=x&&x<=53831||53833<=x&&x<=53859||53861<=x&&x<=53887||53889<=x&&x<=53915||53917<=x&&x<=53943||53945<=x&&x<=53971||53973<=x&&x<=53999||54001<=x&&x<=54027||54029<=x&&x<=54055||54057<=x&&x<=54083||54085<=x&&x<=54111||54113<=x&&x<=54139||54141<=x&&x<=54167||54169<=x&&x<=54195||54197<=x&&x<=54223||54225<=x&&x<=54251||54253<=x&&x<=54279||54281<=x&&x<=54307||54309<=x&&x<=54335||54337<=x&&x<=54363||54365<=x&&x<=54391||54393<=x&&x<=54419||54421<=x&&x<=54447||54449<=x&&x<=54475||54477<=x&&x<=54503||54505<=x&&x<=54531||54533<=x&&x<=54559||54561<=x&&x<=54587||54589<=x&&x<=54615||54617<=x&&x<=54643||54645<=x&&x<=54671||54673<=x&&x<=54699||54701<=x&&x<=54727||54729<=x&&x<=54755||54757<=x&&x<=54783||54785<=x&&x<=54811||54813<=x&&x<=54839||54841<=x&&x<=54867||54869<=x&&x<=54895||54897<=x&&x<=54923||54925<=x&&x<=54951||54953<=x&&x<=54979||54981<=x&&x<=55007||55009<=x&&x<=55035||55037<=x&&x<=55063||55065<=x&&x<=55091||55093<=x&&x<=55119||55121<=x&&x<=55147||55149<=x&&x<=55175||55177<=x&&x<=55203?_:x==9757||x==9977||9994<=x&&x<=9997||x==127877||127938<=x&&x<=127940||x==127943||127946<=x&&x<=127948||128066<=x&&x<=128067||128070<=x&&x<=128080||x==128110||128112<=x&&x<=128120||x==128124||128129<=x&&x<=128131||128133<=x&&x<=128135||x==128170||128372<=x&&x<=128373||x==128378||x==128400||128405<=x&&x<=128406||128581<=x&&x<=128583||128587<=x&&x<=128591||x==128675||128692<=x&&x<=128694||x==128704||x==128716||129304<=x&&x<=129308||129310<=x&&x<=129311||x==129318||129328<=x&&x<=129337||129341<=x&&x<=129342||129489<=x&&x<=129501?P:127995<=x&&x<=127999?y:x==8205?T:x==9792||x==9794||9877<=x&&x<=9878||x==9992||x==10084||x==127752||x==127806||x==127859||x==127891||x==127908||x==127912||x==127979||x==127981||x==128139||128187<=x&&x<=128188||x==128295||x==128300||x==128488||x==128640||x==128658?w:128102<=x&&x<=128105?G:K}return this}f.exports&&(f.exports=a)})(B0);const D0=R;function A0(f){let a,r,t,i,n,E,l;return{c(){a=S("main"),r=S("div"),t=S("h1"),i=H(f[0]),n=d(),E=S("p"),l=H(f[1]),this.h()},l(u){a=I(u,"MAIN",{class:!0});var s=O(a);r=I(s,"DIV",{class:!0});var v=O(r);t=I(v,"H1",{class:!0});var m=O(t);i=J(m,f[0]),m.forEach(k),n=x0(v),E=I(v,"P",{class:!0});var _=O(E);l=J(_,f[1]),_.forEach(k),v.forEach(k),s.forEach(k),this.h()},h(){b(t,"class","me"),b(E,"class","description svelte-16syx3s"),b(r,"class","content svelte-16syx3s"),b(a,"class","svelte-16syx3s")},m(u,s){C0(u,a,s),g(a,r),g(r,t),g(t,i),g(r,n),g(r,E),g(E,l)},p(u,[s]){s&1&&W(i,u[0]),s&2&&W(l,u[1])},i:z,o:z,d(u){u&&k(a)}}}const F0="Vinski Lång",E0="Site still in development 🛠️";function r0(f,a,r){const t=new D0;let i="",n="";return t.splitGraphemes(F0).forEach((E,l)=>{setTimeout(()=>{r(0,i+=E)},100*l)}),setTimeout(()=>{t.splitGraphemes(E0).forEach((E,l)=>{setTimeout(()=>{r(1,n+=E)},100*l)})},100*t.countGraphemes(i)+2e3),[i,n]}class n0 extends e{constructor(a){super(),o(this,a,r0,A0,c,{})}}export{n0 as default};