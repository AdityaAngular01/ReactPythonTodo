import { Plus, Trash2, Pencil } from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "../../components/ui/card.tsx";
import {Input} from "../../components/ui/input.tsx";
import {Button} from "../../components/ui/button.tsx";
import {ScrollArea} from "../../components/ui/scroll-area.tsx";
import {Checkbox} from "../../components/ui/checkbox.tsx";
import {useEffect, useState} from "react";
import {todoService} from "../../services/todoService.ts";



export function Dashboard() {
    const [title, setTaskTitle] = useState('')
    const [tasks, setTasks] = useState([])
    const [refresh, setRefresh] = useState(0)

    useEffect(()=>{
        // @ts-ignore
        todoService.getTasks().then(response=> setTasks(response))
    },[refresh])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await todoService.createTask({title})
        setRefresh(prev => prev + 1)
        setTaskTitle('')
    }

    const handleDelete = async (id: string) => {
        if(confirm("Are you sure you want to delete this task?")){
            await todoService.deleteTask(id)
            setRefresh(prev => prev + 1)
        }
    }


    const handleDeleteAll = async () => {
        if(confirm("Are you sure you want to delete all tasks?")){
            await todoService.deleteAllTasks()
            setRefresh(prev => prev + 1)
        }
    }


    return (
        <div className="min-h-screen bg-muted/40 flex items-center justify-center p-6">
            <Card className="w-full max-w-xl shadow-xl rounded-2xl">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">My Todo List</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                    {/* Add Todo Section */}
                    <div>
                        <form onSubmit={handleSubmit} method="post" className="flex gap-2">
                            <Input placeholder="Add a new task..." className="flex-1" onChange={(e) => setTaskTitle(e.target.value)} />
                            <Button size="icon" className="rounded-xl" type={"submit"}>
                                <Plus className="h-4 w-4" />
                            </Button>
                        </form>
                    </div>

                    {/* Todo List */}
                    <ScrollArea className="h-72 pr-3">
                        <div className="space-y-3">
                            {/* Todo Item */}
                            {
                                tasks.map((task: any) => (
                                    <div className="flex items-center justify-between p-3 rounded-xl border bg-background hover:shadow-sm transition">
                                        <div className="flex items-center gap-3">
                                            <Checkbox checked={task.is_completed}/>
                                            <span className="text-sm font-medium">{task.title}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button variant="ghost" size="icon" className="rounded-lg">
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="rounded-lg" onClick={() => handleDelete(task._id)}>
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </ScrollArea>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between pt-2">
            <span className="text-sm text-muted-foreground">
              2 tasks remaining
            </span>
                        <Button variant="outline" className="rounded-xl" onClick={handleDeleteAll}>
                            Clear Completed
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

