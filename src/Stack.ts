
class Pila<A> {
    items: A[] = [];
    push(item: A): void {
        this.items.push(item);
    }
    pop(): A | undefined {
        return this.items.pop();
    }
    size(): number {
        return this.items.length;
    }
}


class PilaUnica<A> extends Pila<A> {

    push(item: A): void {
        if (!this.items.includes(item)) {
            super.push(item);
        } else {
            console.log("Elemento duplicado " + item + " no se puede agregar");
        }
    }
}



const ejemplo1 = new Pila<number>();
ejemplo1.push(1);
ejemplo1.push(2);
ejemplo1.push(3);
ejemplo1.push(4);
ejemplo1.push(6);
console.log("La cantidad de elementos es:"+ejemplo1.size());
console.log("El ultimo elemento de la pila es " +ejemplo1.pop()+" y fue removido");


const ejemplo2 = new PilaUnica<string>();
ejemplo2.push("hola");
ejemplo2.push("fausto");
ejemplo2.push("mundo");
ejemplo2.push("fausto");
ejemplo2.push("hola");
console.log("La cantidad de elementos es:"+ ejemplo2.size());
console.log("El ultimo elemento de la pila es " + ejemplo2.pop()+" y fue removido");


