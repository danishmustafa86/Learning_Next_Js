import { log } from "console"
type ButtonProp={
    title:string,
    data?:string
    derscription:String
    showtag?:boolean
}
export default function Card(props:ButtonProp) {
    let st:string="your answer is true"
console.log(props.title,"props tittttle",props.data);

    return (
        <div>
            <h1>card component</h1>
            <div>
                {props.data}
                {props.title}
                {props.showtag ? <span>{st}</span> : " false"}
            </div>
        </div>
    )
}