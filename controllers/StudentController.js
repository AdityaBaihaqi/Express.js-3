// Membuat Class StudentController
class StudentController {
    index(req, res) {
        res.send("Menampilkan semua students");
    }

    store(req, res) {
        res.send("Menambahkan data student");
    }

    update(req, res) {
        const { id } = req.params;
        res.send(`Mengedit data student ${id}`);
    }

    destroy(req, res) {
        const { id } = req.params;
        res.send(`Menghapus data student ${id}`);
    }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
