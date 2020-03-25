# Rewrite the index_of method using recursion instead of a while loop.

class Node

  attr_accessor :data, :next_node

  def initialize(data)
    @data = data
  end

end

class LinkedList

  attr_accessor :first_node

  def initialize(first_node)
    @first_node = first_node
  end

  def index_of(value)
    current_node = @first_node
    current_index = 0

    begin
      return current_index if current_node.data == value
      current_node = current_node.next_node
      current_index += 1
    end while current_node

    return nil
  end

  # recursive version of #index_of
  def recursive_index_of(value, current_node = @first_node, current_index = 0) 
    if current_node.data == value
      return current_index
    else
      recursive_index_of(value, current_node.next_node, current_index + 1) if current_node.next_node
    end
  end

end

node_1 = Node.new('time')
node_2 = Node.new('heaven')
node_3 = Node.new('earth')
node_1.next_node = node_2
node_2.next_node = node_3

list = LinkedList.new(node_1)
p list.recursive_index_of('time') # 0
p list.recursive_index_of('heaven') # 1
p list.recursive_index_of('earth') # 2
p list.recursive_index_of('space') # nil