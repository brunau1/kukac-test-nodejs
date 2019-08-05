type NotesAmount = {
    oneAmount?: number,
    tenAmount?: number,
    hundredAmount?: number
};

export function cashAmount( purchase: number, payment: number ) : NotesAmount{
    
    const returnedValue = payment - purchase;

    const countNotes: NotesAmount = {}
    
    countNotes.oneAmount = returnedValue%10
    countNotes.tenAmount = ((returnedValue%100) - countNotes.oneAmount)/10
    countNotes.hundredAmount = (returnedValue - (countNotes.oneAmount + countNotes.tenAmount*10))/100 

    return countNotes
}