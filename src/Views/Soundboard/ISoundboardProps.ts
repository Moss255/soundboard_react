import { RouteComponentProps } from "react-router-dom";

interface matchParams {
    selection: string;
}

export default interface ISoundboardProps extends RouteComponentProps<matchParams>{

}