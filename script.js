
const students = [
    { name: "Anderson", testGrade: 6 }, 
    { name: "Luciana", testGrade: 7 }, 
    { name: "Andrei", testGrade: 8 }, 
    { name: "Enhique", testGrade: 9 }, 
]

const newList = students.map( aluno => { 
    if(aluno.testGrade >= 8 ) { 
        return {
            name: aluno.name,
            resultado: "Aprovado"
        }

    } else if(aluno.testGrade >= 5 && aluno.testGrade < 8) {
        return {
            name: aluno.name,
            resultado: "Recuperação"
        }    
    } else {
        return {
            name: aluno.name,
            resultado: "Reprovado"
        }    }
    
})
const newList = newList.filter(aluno => aluno = Aprovado)
console.log(newList)

