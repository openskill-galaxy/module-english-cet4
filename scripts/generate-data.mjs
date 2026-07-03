import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var D=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../public/data");
function p(a){return a[Math.floor(Math.random()*a.length)]}
async function main(){
  console.log("Gen English CET4...");
  var courses=JSON.parse(fs.readFileSync(D+"/courses.json","utf8"));
  var lessons=JSON.parse(fs.readFileSync(D+"/lessons.json","utf8"));
  var kps=JSON.parse(fs.readFileSync(D+"/knowledge-points.json","utf8"));
  var questions=JSON.parse(fs.readFileSync(D+"/questions.json","utf8"));
  var exams=JSON.parse(fs.readFileSync(D+"/exams.json","utf8"));
  var cases=JSON.parse(fs.readFileSync(D+"/cases.json","utf8"));
  var routes=JSON.parse(fs.readFileSync(D+"/routes.json","utf8"));
  var glossary=JSON.parse(fs.readFileSync(D+"/glossary.json","utf8"));
  var faqs=JSON.parse(fs.readFileSync(D+"/faqs.json","utf8"));
  var tags=JSON.parse(fs.readFileSync(D+"/tags.json","utf8"));
  var src=["词汇","语法","阅读","听力","写作","翻译","完形","匹配","选词","快速阅读"];
  
  for(var i=cases.length;i<260;i++){var t2=p(src);cases.push({id:"en-case-"+String(i+1).padStart(3,"0"),title:t2+"案例"+(i+1),description:"通过"+t2+"掌握CET4",difficulty:i<80?"easy":i<160?"medium":"hard",duration:30,steps:[{order:1,title:"问题",description:"分析"},{order:2,title:"方法",description:"训练"},{order:3,title:"练习",description:"实践"},{order:4,title:"检查",description:"验证"}],relatedQuestionIds:[],tags:[t2],updatedAt:"2026-07-03T00:00:00.000Z"});}
  
  var si=[];
  courses.forEach(c=>si.push({id:c.id,type:"course",title:c.title,content:c.description,url:"/courses/"+c.slug,tags:["CET4"]}));
  lessons.forEach(l=>si.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["CET4"]}));
  kps.forEach(k=>si.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["CET4"]}));
  questions.forEach(q=>si.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["CET4"]}));
  glossary.forEach(g=>si.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["CET4"]}));
  faqs.forEach(f=>si.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["CET4"]}));
  
  var f2={"cases.json":cases,"search-index.json":si};
  for(var key in f2){fs.writeFileSync(path.join(D,key),JSON.stringify(f2[key],null,2),"utf-8");}
  console.log("ca:"+cases.length+" si:"+si.length+" Done!");
}
main().catch(function(e){console.error(e);process.exit(1);});
