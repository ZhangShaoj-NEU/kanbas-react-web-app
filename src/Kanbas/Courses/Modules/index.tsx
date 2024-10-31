import { useParams } from "react-router";
import * as db from "../../Database";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useState } from "react";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === "FACULTY";

    const handleAddModule = () => {
        dispatch(addModule({ name: moduleName, course: cid }));
        setModuleName("");
    };

    const handleEditModule = (moduleId: string) => {
        dispatch(editModule(moduleId));
    };

    const handleDeleteModule = (moduleId: string) => {
        dispatch(deleteModule(moduleId));
    };

    const handleUpdateModule = (module: any, newValue: string) => {
        dispatch(updateModule({ ...module, name: newValue }));
    };

    const handleFinishEditing = (module: any) => {
        dispatch(updateModule({ ...module, editing: false }));
    };

    return (
        <div>
            <ModulesControls 
                moduleName={moduleName} 
                setModuleName={setModuleName}
                addModule={handleAddModule} 
            />
            <br /><br /><br /><br />

            <ul id="wd-modules" className="list-group rounded-0">
                {modules.filter((module: any) => module.course === cid).map((module: any) => (
                    <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" />
                            {!module.editing && module.name}
                            {module.editing && (
                                <input 
                                    className="form-control w-50 d-inline-block"
                                    onChange={(e) => handleUpdateModule(module, e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleFinishEditing(module);
                                        }
                                    }}
                                    defaultValue={module.name}
                                />
                            )}
                            {isFaculty && (
                                <ModuleControlButtons 
                                    moduleId={module._id}
                                    deleteModule={handleDeleteModule}
                                    editModule={handleEditModule}
                                />
                            )}
                        </div>
                        {module.lessons && (
                            <ul className="wd-lessons list-group rounded-0">
                                {module.lessons.map((lesson: any) => (
                                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                                        <BsGripVertical className="me-2 fs-3" />
                                        {lesson.name}
                                        <LessonControlButtons />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
