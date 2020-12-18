self.webpackChunkRemoteClient([65],{127:function(e,t,r){"use strict";var s=r(18),o=(r(7),r(3),r(4),r(20)),a=r(19),i=r(24),n=(r(34),r(35),r(25));let l=class extends n.a{constructor(...e){super(...e),this.requestOptions=null,this.url=null}normalizeCtorArgs(e,t){return"string"!=typeof e?e:{url:e,...t}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(e){return e?Object(i.I)(e):null}_encode(e,t,r){const s={};for(const o in e){if("declaredClass"===o)continue;const a=e[o];if(null!=a&&"function"!=typeof a)if(Array.isArray(a)){s[o]=[];for(let e=0;e<a.length;e++)s[o][e]=this._encode(a[e])}else if("object"==typeof a)if(a.toJSON){const e=a.toJSON(r&&r[o]);s[o]=t?e:JSON.stringify(e)}else s[o]=t?a:JSON.stringify(a);else s[o]=a}return s}};Object(s.a)([Object(o.b)({readOnly:!0,dependsOn:["url"]})],l.prototype,"parsedUrl",null),Object(s.a)([Object(o.b)()],l.prototype,"requestOptions",void 0),Object(s.a)([Object(o.b)({type:String})],l.prototype,"url",void 0),l=Object(s.a)([Object(a.a)("esri.tasks.Task")],l);var c=l;t.a=c},280:function(e,t,r){"use strict";var s=r(18),o=(r(7),r(3),r(4),r(20)),a=r(54),i=r(19),n=(r(24),r(34),r(35),r(50));const l=new a.a({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let c=class extends n.a{constructor(e){super(e),this.description=null,this.type=null}};Object(s.a)([Object(o.b)({type:String,json:{write:!0}})],c.prototype,"description",void 0),Object(s.a)([Object(o.b)({type:String,json:{read:l.read,write:l.write}})],c.prototype,"type",void 0),c=Object(s.a)([Object(i.a)("esri.tasks.support.GPMessage")],c);var p=c;t.a=p},352:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));class s{constructor(e={}){this._options=e}toQueryParams(e){if(!e)return null;const t=e.toJSON(),r={};return Object.keys(t).forEach(e=>{const s=this._options[e];if(s){const o="boolean"!=typeof s&&s.name?s.name:e,a="boolean"!=typeof s&&s.getter?s.getter(t):t[e];null!=a&&(r[o]=(e=>{if(!Array.isArray(e))return!1;const[t]=e;return"number"==typeof t||"string"==typeof t})(a)?a.join(","):"object"==typeof a?JSON.stringify(a):a)}else r[e]=t[e]},this),r}}function o(e){return new s(e)}},353:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var s=r(18),o=(r(7),r(9)),a=r(1),i=(r(3),r(4),r(20),r(19)),n=r(14),l=r(24),c=(r(34),r(35),r(55)),p=r(127);const u=e=>{let t=class extends e{async getServiceDescription(){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription()),this._serviceDescriptionPromise}async _fetchServiceDescription(){if(!this.url||!this.parsedUrl)throw new n.a("network-service:missing-url","Url to Network service is missing");const e=this.url,{data:t}=await Object(c.default)(e,{query:{f:"json"}});t.supportedTravelModes||(t.supportedTravelModes=[]);for(let e=0;e<t.supportedTravelModes.length;e++)t.supportedTravelModes[e].id||(t.supportedTravelModes[e].id=t.supportedTravelModes[e].itemId);const r=t.currentVersion>=10.4?async function(e){try{const{data:{supportedTravelModes:t,defaultTravelMode:r}}=await Object(c.default)(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}});return{supportedTravelModes:t,defaultTravelMode:r}}catch(e){throw new n.a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(e):async function(e){const{data:t}=await Object(c.default)(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}});if(!t||!t.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};e=t.owningSystemUrl;const{data:r}=await Object(c.default)(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}}),s=Object(o.b)("helperServices.routingUtilities.url",r);if(!s)return{supportedTravelModes:[],defaultTravelMode:null};const a=Object(l.I)(e),i=/\/solveClosestFacility$/.test(a.path)?"Route":/\/solveClosestFacility$/.test(a.path)?"ClosestFacility":"ServiceAreas",n=await Object(c.default)(s+("/"===s[s.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:i}}),p=[];let u=null;if(n&&n.data&&n.data.results&&n.data.results.length){const e=n.data.results;for(const t of e)if("supportedTravelModes"===t.paramName){if(t.value&&t.value.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);p.push(t)}}else"defaultTravelMode"===t.paramName&&(u=t.value)}return{supportedTravelModes:p,defaultTravelMode:u}}(e),{defaultTravelMode:s,supportedTravelModes:a}=await r;return t.defaultTravelMode=s,t.supportedTravelModes=a,t}_isInputGeometryZAware(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if(Object(a.g)(e)&&e.hasZ)return!0}return!1}_dropZValuesOffInputGeometry(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}};return t=Object(s.a)([Object(i.a)("esri.tasks.mixins.NAServiceDescription")],t),t};let d=class extends(u(p.a)){};d=Object(s.a)([Object(i.a)("esri.tasks.mixins.NAServiceDescription")],d)},354:function(e,t,r){"use strict";var s=r(18),o=(r(7),r(3),r(4),r(20)),a=r(54),i=r(19),n=(r(24),r(34),r(35),r(280));const l=new a.a({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let c=class extends n.a{constructor(e){super(e),this.type=null}};Object(s.a)([Object(o.b)({type:String,json:{read:l.read,write:l.write}})],c.prototype,"type",void 0),c=Object(s.a)([Object(i.a)("esri.tasks.support.NAMessage")],c);var p=c;t.a=p},469:function(e,t,r){"use strict";var s=r(18),o=(r(7),r(1)),a=(r(3),r(4),r(20)),i=r(52),n=r(19),l=(r(24),r(34),r(35),r(56)),c=r(64),p=r(57),u=r(102),d=(r(59),r(74)),f=r(118);let y=class extends f.default{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){(e||[]).forEach(e=>{this._decompressFeatureGeometry(e,t.summary.envelope.spatialReference)});const r=l.a.fromJSON(t.spatialReference);return e.map(e=>{const t=d.a.fromJSON(e),s=e.geometry&&e.geometry.spatialReference;return t.geometry&&!s&&(Object(o.m)(t.geometry).spatialReference=r),t.strings=e.strings,t.events=(e.events||[]).map(t=>{const r=new d.a({geometry:new c.a({x:t.point.x,y:t.point.y,z:t.point.z,hasZ:void 0!==t.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:t.ETA,arriveTimeUTC:t.arriveTimeUTC}});return r.strings=t.strings,r}),t})}get mergedGeometry(){if(!this.features)return null;const e=this.features.map(({geometry:e})=>Object(o.m)(e)),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}get strings(){return this.features.map(({strings:e})=>e)}_decompressFeatureGeometry(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)}_decompressGeometry(e,t){let r=0,s=0,o=0,a=0;const i=[];let n,l,c,p,u,d,f,y,b=0,m=0,h=0;if(u=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),u||(u=[]),0===parseInt(u[b],32)){b=2;const e=parseInt(u[b],32);b++,d=parseInt(u[b],32),b++,1&e&&(m=u.indexOf("|")+1,f=parseInt(u[m],32),m++),2&e&&(h=u.indexOf("|",m)+1,y=parseInt(u[h],32),h++)}else d=parseInt(u[b],32),b++;for(;b<u.length&&"|"!==u[b];){n=parseInt(u[b],32)+r,b++,r=n,l=parseInt(u[b],32)+s,b++,s=l;const e=[n/d,l/d];m&&(p=parseInt(u[m],32)+o,m++,o=p,e.push(p/f)),h&&(c=parseInt(u[h],32)+a,h++,a=c,e.push(c/y)),i.push(e)}return{paths:[i],hasZ:m>0,hasM:h>0,spatialReference:t}}_mergePolylinesToSinglePath(e,t){let r=[];(e||[]).forEach(e=>{e.paths.forEach(e=>{r=r.concat(e)})});const s=[];let o=[0,0];return r.forEach(e=>{e[0]===o[0]&&e[1]===o[1]||(s.push(e),o=e)}),new u.a({paths:[s]},t)}};Object(s.a)([Object(a.b)({type:p.a,json:{read:{source:"summary.envelope"}}})],y.prototype,"extent",void 0),Object(s.a)([Object(a.b)()],y.prototype,"features",void 0),Object(s.a)([Object(i.a)("features")],y.prototype,"readFeatures",null),Object(s.a)([Object(a.b)()],y.prototype,"geometryType",void 0),Object(s.a)([Object(a.b)({readOnly:!0,dependsOn:["features","extent.spatialReference"]})],y.prototype,"mergedGeometry",null),Object(s.a)([Object(a.b)()],y.prototype,"routeId",void 0),Object(s.a)([Object(a.b)()],y.prototype,"routeName",void 0),Object(s.a)([Object(a.b)({value:null,readOnly:!0,dependsOn:["features"]})],y.prototype,"strings",null),Object(s.a)([Object(a.b)({json:{read:{source:"summary.totalDriveTime"}}})],y.prototype,"totalDriveTime",void 0),Object(s.a)([Object(a.b)({json:{read:{source:"summary.totalLength"}}})],y.prototype,"totalLength",void 0),Object(s.a)([Object(a.b)({json:{read:{source:"summary.totalTime"}}})],y.prototype,"totalTime",void 0),y=Object(s.a)([Object(n.a)("esri.tasks.support.DirectionsFeatureSet")],y);var b=y;t.a=b},673:function(e,t,r){"use strict";r.r(t);var s=r(18),o=(r(7),r(3),r(4),r(20)),a=r(19),i=(r(24),r(34),r(35),r(2)),n=r(55),l=r(224),c=r(127),p=r(352),u=r(353),d=r(52),f=r(50),y=r(74),b=r(118),m=r(354),h=r(469);let O=class extends f.a{constructor(e){super(e),this.directions=null,this.route=null,this.routeName=null,this.stops=null}};Object(s.a)([Object(o.b)({type:h.a,json:{write:!0}})],O.prototype,"directions",void 0),Object(s.a)([Object(o.b)({type:y.a,json:{write:!0}})],O.prototype,"route",void 0),Object(s.a)([Object(o.b)({type:String,json:{write:!0}})],O.prototype,"routeName",void 0),Object(s.a)([Object(o.b)({type:[y.a],json:{write:!0}})],O.prototype,"stops",void 0),O=Object(s.a)([Object(a.a)("esri.tasks.support.RouteResult")],O);var j=O;function g(e){return e&&b.default.fromJSON(e).features.map(e=>e)}let v=class extends f.a{constructor(e){super(e),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(e,t){return g(t.barriers||t.pointBarriers)}readPolylineBarriers(e){return g(e)}readPolygonBarriers(e){return g(e)}};Object(s.a)([Object(o.b)({aliasOf:"pointBarriers"})],v.prototype,"barriers",void 0),Object(s.a)([Object(o.b)({type:[m.a]})],v.prototype,"messages",void 0),Object(s.a)([Object(o.b)({type:[y.a]})],v.prototype,"pointBarriers",void 0),Object(s.a)([Object(d.a)("pointBarriers",["barriers","pointBarriers"])],v.prototype,"readPointBarriers",null),Object(s.a)([Object(o.b)({type:[y.a]})],v.prototype,"polylineBarriers",void 0),Object(s.a)([Object(d.a)("polylineBarriers")],v.prototype,"readPolylineBarriers",null),Object(s.a)([Object(o.b)({type:[y.a]})],v.prototype,"polygonBarriers",void 0),Object(s.a)([Object(d.a)("polygonBarriers")],v.prototype,"readPolygonBarriers",null),Object(s.a)([Object(o.b)({type:[j]})],v.prototype,"routeResults",void 0),v=Object(s.a)([Object(a.a)("esri.tasks.support.RouteResultsContainer")],v);var T=v;const w=Object(p.a)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});let M=class extends(Object(u.a)(c.a)){constructor(e){super(e)}solve(e,t){const r=[],s=[],o={},a={};return e.stops&&e.stops.features&&this._collectGeometries(e.stops.features,s,"stops.features",o),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,s,"pointBarriers.features",o),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,s,"polylineBarriers.features",o),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,s,"polygonBarriers.features",o),Object(l.a)(s).then(e=>{for(const t in o){const s=o[t];r.push(t),a[t]=e.slice(s[0],s[1])}return this._isInputGeometryZAware(a,r)?this.getServiceDescription():Object(i.s)({dontCheck:!0})}).then(s=>{("dontCheck"in s?s.dontCheck:s.hasZ)||this._dropZValuesOffInputGeometry(a,r);for(const t in a)a[t].forEach((r,s)=>{e.get(t)[s].geometry=r});let o={query:{...this.parsedUrl.query,f:"json",...w.toQueryParams(e)}};(this.requestOptions||t)&&(o={...this.requestOptions,...t,...o});const{path:i}=this.parsedUrl,l="/solve",c=i.endsWith(l)?i:i+l;return Object(n.default)(c,o)}).then(e=>this._handleSolveResponse(e))}_collectGeometries(e,t,r,s){s[r]=[t.length,t.length+e.length],e.forEach(e=>{t.push(e.geometry)})}_handleSolveResponse(e){const t=[],r=[],{directions:s=[],routes:{features:o=[],spatialReference:a=null}={},stops:{features:i=[],spatialReference:n=null}={},barriers:l,polygonBarriers:c,polylineBarriers:p,messages:u}=e.data,d="esri.tasks.RouteTask.NULL_ROUTE_NAME";let f,y,b=!0;const m=o&&a||i&&n||l&&l.spatialReference||c&&c.spatialReference||p&&p.spatialReference;s.forEach(e=>{t.push(f=e.routeName),r[f]={directions:e}}),o.forEach(e=>{-1===t.indexOf(f=e.attributes.Name)&&(t.push(f),r[f]={}),e.geometry&&(e.geometry.spatialReference=m),r[f].route=e}),i.forEach(e=>{y=e.attributes,-1===t.indexOf(f=y.RouteName||d)&&(t.push(f),r[f]={}),f!==d&&(b=!1),e.geometry&&(e.geometry.spatialReference=m),null==r[f].stops&&(r[f].stops=[]),r[f].stops.push(e)}),i.length>0&&!0===b&&(r[t[0]].stops=r[d].stops,delete r[d],t.splice(t.indexOf(d),1));const h=t.map(e=>(r[e].routeName=e===d?null:e,r[e]));return T.fromJSON({routeResults:h,pointBarriers:l,polygonBarriers:c,polylineBarriers:p,messages:u})}};M=Object(s.a)([Object(a.a)("esri.tasks.RouteTask")],M);var B=M;t.default=B}});