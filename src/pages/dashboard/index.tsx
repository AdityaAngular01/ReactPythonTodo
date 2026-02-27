import { Plus, Trash2, Pencil } from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "../../components/ui/card.tsx";
import {Input} from "../../components/ui/input.tsx";
import {Button} from "../../components/ui/button.tsx";
import {ScrollArea} from "../../components/ui/scroll-area.tsx";
import {Checkbox} from "../../components/ui/checkbox.tsx";


export function Dashboard() {
    return (
        <div className="min-h-screen bg-muted/40 flex items-center justify-center p-6">
            <Card className="w-full max-w-xl shadow-xl rounded-2xl">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">My Todo List</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                    {/* Add Todo Section */}
                    <div className="flex gap-2">
                        <Input placeholder="Add a new task..." className="flex-1" />
                        <Button size="icon" className="rounded-xl">
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Todo List */}
                    <ScrollArea className="h-72 pr-3">
                        <div className="space-y-3">
                            {/* Todo Item */}
                            <div className="flex items-center justify-between p-3 rounded-xl border bg-background hover:shadow-sm transition">
                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm font-medium">Sample Task One</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon" className="rounded-lg">
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="rounded-lg">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-3 rounded-xl border bg-background hover:shadow-sm transition">
                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span className="text-sm font-medium">Sample Task Two</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon" className="rounded-lg">
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="rounded-lg">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </ScrollArea>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between pt-2">
            <span className="text-sm text-muted-foreground">
              2 tasks remaining
            </span>
                        <Button variant="outline" className="rounded-xl">
                            Clear Completed
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

