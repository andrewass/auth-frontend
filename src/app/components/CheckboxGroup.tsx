interface Props {
    updateCheckedBoxes: (items: CheckboxItem[]) => void
    items: CheckboxItem[]
}


export interface CheckboxItem {
    code: string
    decode: string
    checked: boolean
}

export default function CheckboxGroup({items, updateCheckedBoxes}: Props) {

    const sortedItems = items.sort((a, b) => a.code.localeCompare(b.code))

    function handleChangedItem(changedItem: CheckboxItem) {
        const otherItems = sortedItems.filter(item => item.code !== changedItem.code)
        updateCheckedBoxes(otherItems.concat({
            code: changedItem.code,
            decode: changedItem.decode,
            checked: !changedItem.checked
        }))
    }

    return (
        <div>
            <h4>Grant Types: </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
                {sortedItems.map(item => (
                    <div key={item.code} className="flex items-center space-x-2">
                        <input type="checkbox" checked={item.checked} onChange={() => handleChangedItem(item)}
                               className="checkbox checkbox-primary"/>
                        <span>{item.decode}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}