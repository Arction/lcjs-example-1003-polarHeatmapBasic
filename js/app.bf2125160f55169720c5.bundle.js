(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const n=a(89),s=a(863),{lightningChart:i,Themes:l,LUT:r,PalettedFill:o,regularColorSteps:d}=n,{createWaterDropDataGenerator:p}=s,u=i().Polar({}),h=u.addHeatmapSeries({sectors:360,annuli:100,amplitudeStart:0,amplitudeStep:1,dataOrder:"annuli"}).setIntensityInterpolation("bilinear"),m=u.getTheme().examples;if(!m)throw new Error;p().setRows(100).setColumns(360).generate().then((e=>{const t=new o({lut:new r({units:"intensity",steps:d(0,60,m.intensityColorPalette),interpolate:!0})});h.setFillStyle(t).invalidateIntensityValues(e),u.addLegendBox().add(u).setAutoDispose({type:"max-width",maxWidth:.3})}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);