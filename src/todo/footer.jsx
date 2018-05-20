import '../assets/styles/footer.less'

export default {
    data() {
        return {
            author: 'Xufei'
        }
    },
    render() {
        return (
            <div id="footer">
                <span>Written By {this.author}</span>
            </div>
        )
    }
}