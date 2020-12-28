import {DATA_READY,USER_LOGIN,USER_LOGOUT} from '../Actions/data.actions';


const initialState ={
    logged : false,
    data : null,
    sems : null,
    rollno : null,
    mobile : null,
    email : null,
    firstname : null,
    lastname : null,
    
}

// const appData =   [{"e-mail": "rahaman.2131@gmail.com", "firstname": "Rahaman", "lastname": "Abdul", "mobilenumber": "9912462131", "password": "edb6331fec336c83abaef7cf66a23cb4", "rollno": "17H71A1201"}]
const dataReducer = ( state = initialState ,action ) =>{
    console.log(action.type,"ACTION")
    switch(action.type){
        case DATA_READY:
            const res = action.data
            var arr = []
                var sems = { sem1: 'R..11',sem2: 'R..12',
                sem3 : 'R..21',sem4: 'R..22',
                sem5 :'R..31',sem6:'R..32',
                sem7: 'R..41',sem8: 'R..42'
                 }
                // const res = {data:[{"rollno":"16221A0102","subjectcode":"R161201","subjectname":"ENGLISH-II","grade":"B","credits":"3","flag":"56735811"},{"rollno":"16221A0102","subjectcode":"R161202","subjectname":"MATHEMATICS-II (MATHEMATICAL METHODS)","grade":"C","credits":"3","flag":"56735811"},{"rollno":"16221A0102","subjectcode":"R161203","subjectname":"MATHEMATICS - III","grade":"D","credits":"3","flag":"56735811"},{"rollno":"16221A0102","subjectcode":"R161204","subjectname":"ENGINEERING PHYSICS","grade":"D","credits":"3","flag":"56735811"},{"rollno":"16221A0102","subjectcode":"R161206","subjectname":"ENGINEERING DRAWING","grade":"B","credits":"3","flag":"56735811"},{"rollno":"16221A0102","subjectcode":"R161221","subjectname":"ENGLISH - COMMUNICATION SKILLS LAB - II","grade":"S","credits":"2","flag":"56735811"},{"rollno":"16221A0102","subjectcode":"R161222","subjectname":"ENGINEERING \/APPLIED PHYSICS LAB","grade":"O","credits":"2","flag":"56735811"},{"rollno":"16221A0102","subjectcode":"R161224","subjectname":"ENGG. WORKSHOP & IT WORKSHOP","grade":"O","credits":"2","flag":"56735811"},{"rollno":"16221A0102","subjectcode":"R161232","subjectname":"ELEMENTS OF MECHANICAL ENGINEERING","grade":"C","credits":"3","flag":"56735811"},{"rollno":"16221A0102","subjectcode":"R1622011","subjectname":"BUILDING PLANNING & DRAWING","grade":"A","credits":"3","flag":"56735914"},{"rollno":"16221A0102","subjectcode":"R1622012","subjectname":"STRENGTH OF MATERIALS - II","grade":"D","credits":"3","flag":"56735914"},{"rollno":"16221A0102","subjectcode":"R1622013","subjectname":"HYDRAULICS & HYDRAULIC MACHINERY","grade":"D","credits":"3","flag":"56735914"},{"rollno":"16221A0102","subjectcode":"R1622014","subjectname":"CONCRETE TECHNOLOGY","grade":"D","credits":"3","flag":"56735914"},{"rollno":"16221A0102","subjectcode":"R1622015","subjectname":"STRUCTURAL ANALYSIS - I","grade":"D","credits":"3","flag":"56735914"},{"rollno":"16221A0102","subjectcode":"R1622016","subjectname":"TRANSPORTATION ENGINEERING - I","grade":"D","credits":"3","flag":"56735914"},{"rollno":"16221A0102","subjectcode":"R1622017","subjectname":"FM & HM LAB","grade":"S","credits":"2","flag":"56735914"},{"rollno":"16221A0102","subjectcode":"R1622018","subjectname":"SURVEY FIELD WORK - II","grade":"S","credits":"2","flag":"56735914"},{"rollno":"16221A0102","subjectcode":"R1631011","subjectname":"MANAGEMENT SCIENCE","grade":"C","credits":"3","flag":"56735966"},{"rollno":"16221A0102","subjectcode":"R1631012","subjectname":"ENGINEERING GEOLOGY","grade":"D","credits":"3","flag":"56735966"},{"rollno":"16221A0102","subjectcode":"R1631013","subjectname":"STRUCTURAL ANALYSIS -II","grade":"C","credits":"3","flag":"56735966"},{"rollno":"16221A0102","subjectcode":"R1631014","subjectname":"DESIGN & DRAWING OF REINFORCED CONCRETE STRUCTURES","grade":"C","credits":"3","flag":"56735966"},{"rollno":"16221A0102","subjectcode":"R1631015","subjectname":"TRANSPORTATION ENGINEERING - II","grade":"C","credits":"3","flag":"56735966"},{"rollno":"16221A0102","subjectcode":"R1631016","subjectname":"CONCRETE TECHNOLOGY LAB","grade":"O","credits":"2","flag":"56735966"},{"rollno":"16221A0102","subjectcode":"R1631017","subjectname":"GEOLOGY LAB","grade":"O","credits":"2","flag":"56735966"},{"rollno":"16221A0102","subjectcode":"R1631018","subjectname":"TRANSPORTATION ENGINEERING LAB","grade":"O","credits":"2","flag":"56735966"},{"rollno":"16221A0102","subjectcode":"R1632011","subjectname":"DESIGN & DRAWING OF STEEL STRUCTURES","grade":"F","credits":"0","flag":"56736004"},{"rollno":"16221A0102","subjectcode":"R1632012","subjectname":"GEOTECHNICAL ENGINEERING - I","grade":"C","credits":"3","flag":"56736004"},{"rollno":"16221A0102","subjectcode":"R1632013","subjectname":"ENVIRONMENTAL ENGINEERING -I","grade":"C","credits":"3","flag":"56736004"},{"rollno":"16221A0102","subjectcode":"R1632014","subjectname":"WATER RESOURCE ENGINEERING -I","grade":"C","credits":"3","flag":"56736004"},{"rollno":"16221A0102","subjectcode":"R1632016","subjectname":"GEOTECHNICAL ENGINEERING LAB","grade":"S","credits":"2","flag":"56736004"},{"rollno":"16221A0102","subjectcode":"R1632017","subjectname":"ENVIRONMENTAL ENGINEERING LAB","grade":"S","credits":"2","flag":"56736004"},{"rollno":"16221A0102","subjectcode":"R1632018","subjectname":"COMPUTER AIDED ENGINEERING LAB","grade":"S","credits":"2","flag":"56736004"},{"rollno":"16221A0102","subjectcode":"R163201D","subjectname":"WASTE WATER MANAGEMENT","grade":"D","credits":"3","flag":"56736004"},{"rollno":"16221A0102","subjectcode":"R1641011","subjectname":"ENVIRONMENTAL ENINEERING-II","grade":"D","credits":"3","flag":"56736070"},{"rollno":"16221A0102","subjectcode":"R1641012","subjectname":"WATER RESOURCES ENGINEERING - II","grade":"C","credits":"3","flag":"56736070"},{"rollno":"16221A0102","subjectcode":"R1641013","subjectname":"GEOTECHNICAL ENGINEERING-II","grade":"F","credits":"0","flag":"56736070"},{"rollno":"16221A0102","subjectcode":"R1641014","subjectname":"REMOTE SENSING AND GIS APPLICATIONS","grade":"B","credits":"3","flag":"56736070"},{"rollno":"16221A0102","subjectcode":"R1641017","subjectname":"GIS & CAD LAB","grade":"O","credits":"2","flag":"56736070"},{"rollno":"16221A0102","subjectcode":"R1641018","subjectname":"IRRIGATION DESIGN & DRAWING","grade":"O","credits":"2","flag":"56736070"},{"rollno":"16221A0102","subjectcode":"R164101B","subjectname":"GROUND IMPROVEMENT TECHNIQUES","grade":"C","credits":"3","flag":"56736070"},{"rollno":"16221A0102","subjectcode":"R164101I","subjectname":"GROUND WATER DEVELOPMENT","grade":"B","credits":"3","flag":"56736070"}]}
                Object.entries(sems).map(([key,value])=>{
                let myReg = new RegExp([`${value}`] + ".*$")
                arr.push({
                [`${key}`]:res.data
                .filter( item => 
                {
                return(
                    item.Subcode.match(myReg)
                )
                })
                })
            })
                return {...state,sems:arr}; 
        case USER_LOGIN:
            const email = action.data[0]['email'];
            const firstname = action.data[0]['firstname']
            const lastname = action.data[0]['lastname']
            const rollno = action.data[0]['login']
            const mnumber = action.data[0]['phno']
            const logged = action.data['logged']
            console.log(email,"email")
                return {...state,
                        rollno : rollno,
                        mobile : mnumber,
                        email : email,
                        firstname : firstname,
                        lastname : lastname,
                        logged : logged,
                        };
            case USER_LOGOUT : 
                        console.log(initialState)
                        return initialState;
            default:
                return state;
        }


}
export default dataReducer;