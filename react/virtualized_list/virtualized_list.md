### Instead of rendering all the list values simultaneously, render only the ones visible on screen


```typescript
export type User = {
    id: number;
    name: string;
}

export function createUser(from=0, to = 100000):User[]{
    return Array.from({length:to-from},(_,i)=>({
        id: i+from,
        name: `User ${i+from}`
    }))
}
```


```typescript
const [users, setUsers] = useState(()=>createUser(0,20));


