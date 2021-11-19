import React, { useState } from "react";

// Credit to https://codesandbox.io/s/read-json-file-and-store-in-var-c3s8k?file=/src/Upload.jsx:0-565 for the base code

export function Upload():JSX.Element {
    const [files, setFiles] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileReader = new FileReader();
        if (e.target.files != null) {
            fileReader.readAsText(e.target.files[0], "UTF-8");
            fileReader.onload = e => {
                if (e.target !== null) {
                    console.log("e.target.result", e.target.result);
                    if (typeof e.target.result === "string") {
                        setFiles(e.target.result);
                    }
                }
            };
        }

    };
    return (
        <>
            <h1>Upload Json file - Example</h1>

            <input type="file" onChange={handleChange} />
            <br />
            {"uploaded file content -- " + files}
        </>
    );
}