import React from 'react';

export const EditCarButton = (props: any) => {

    const checkForEdit = (isUser: any): boolean => {
        let isUserPage: boolean = false;
        if (isUser) {
            isUserPage = true;
            return isUserPage;
        };
        return isUserPage;
    };

    return (
        <>
            {checkForEdit(props.owner)
                && <button className="button is-fullwidth is-link" id="submit" type="button">Edit</button>
            }
        </>
    );
}